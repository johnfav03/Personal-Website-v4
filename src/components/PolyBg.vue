<template>
    <svg class="canvas" width="100%" height="100%" viewBox="0 0 100 1000" preserveAspectRatio="none">
        <g v-for="polygon in polygons" :key="polygon.id">
            <path :d="polygon.path" :fill="polygon.color" stroke="#1e1e1e" stroke-width="6" />
        </g>
    </svg>
</template>

<style scoped>
    .canvas {
        overflow: hidden;
        opacity: 0.15;
    }
</style>

<script>
    import * as d3 from 'd3';
    export default {
        data() {
            return {
                width: 100, // Adjust as needed
                height: 1000, // Adjust as needed
                points: [],
                polygons: [],
                pos: 105,
            };
        },
        mounted() {
            this.generatePoints();
            this.generateVoronoi();
        },
        methods: {
            generatePoints() {
                for (let i = 0; i < 50; i++) {
                    const point = {
                        x: Math.random() * this.width,
                        y: Math.random() * this.height,
                    };
                    this.points.push(point);
                }
            },
            generateVoronoi() {
                const delaunay = d3.Delaunay.from(this.points.map((d) => [d.x, d.y]));
                const voronoi = delaunay.voronoi([0, 0, this.width, this.height]);
                const polygons = [];

                for (let i = 0; i < this.points.length; i++) {
                    const site = this.points[i];
                    const cell = voronoi.cellPolygon(i);

                    polygons.push({
                        id: i,
                        path: 'M' + cell
                            .map((point) => point.join(','))
                            .join('L') + 'Z',
                        color: this.getRandomGrayscaleColor(),
                    });
                }
                this.polygons = polygons;
            },
            getRandomGrayscaleColor() {
                const value = Math.floor(Math.random() * 155) + 80;
                return `rgb(${value}, ${value}, ${value})`;
            },
        },
    };
</script>