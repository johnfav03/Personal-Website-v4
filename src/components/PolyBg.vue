<template>
    <svg width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <line :x1="sweepPos" y1="0" :x2="sweepPos" y2="1000" stroke="black"/>
        <circle v-for="pt of pts" :cx="pt.x" :cy="pt.y" r="5"/>
        <path v-for="pt of activ" :d="genArcStr(pt.pt)" fill="none" stroke="black" stroke-opacity="0.5"/>
        <!-- <circle v-for="pt of inter" :cx="pt.pt.x" :cy="pt.pt.y" r="5" fill="red"/> -->
    </svg>
</template>

<script>
import { propsToAttrMap } from '@vue/shared';

    export default{
        data() {
            return {
                sweepPos: 1,
                pts: [],
                queue: [],
                activ: [],
                inter: [],
                verts: [],
            }
        },
        mounted() {
            this.interval = setInterval(() => {
                if (this.sweepPos < 1000) {
                    this.sweepPos += 1;
                    this.update();
                }
            }, 20);
            this.genPts(12);
            this.genQueue();
        },
        methods: {
            randNum(max) {
                return Math.floor(Math.random() * max);
            },
            randHex() {
                let result = '#';
                result += ('00' + this.randNum(256).toString(16)).slice(-2);
                result += ('00' + this.randNum(256).toString(16)).slice(-2);
                result += ('00' + this.randNum(256).toString(16)).slice(-2);
                return result;
            },
            genPts(n) {
                for (let i = 0; i < n; i++) {
                    this.pts.push({x: this.randNum(900) + 50, y: this.randNum(900) + 50});
                }
                this.pts.sort((a, b) => {return a.x - b.x});
            },
            genQueue() {
                //add site events
                for (let i = 0; i < this.pts.length; i++) {
                    this.queue.push({x: this.pts[i].x, type: 0, pt: this.pts[i]})
                }
                //add circ events
                for (let i = 0; i < this.pts.length; i++) {
                    for (let j = i + 1; j < this.pts.length; j++) {
                        for (let k = j + 1; i < this.pts.length; i++) {
                            let ctr = this.findCenter(this.pts[i], this.pts[j], this.pts[k]);
                            let rad = this.findDist(ctr, this.pts[i]);
                            let open = true;
                            for (let l = 0; l < this.pts.length; l++) {
                                if (l == i || l == j || l == k) { continue; }
                                if (this.findDist(ctr, this.pts[l]) <= rad) {
                                    open = false;
                                    break;
                                }
                            }
                            if (open) {
                                this.queue.push({x: ctr.x, type: 1, pt: ctr});
                            }
                        }
                    }
                }
                this.pts.sort((a, b) => {return a.x - b.x});
            },
            findDist(A, B) {
                var xDelta = B.x - A.x;
                var yDelta = B.y - A.y;

                return Math.sqrt((xDelta ** 2) + (yDelta ** 2))
            },
            findCenter(A, B, C) {
                var yDelta_a = B.y - A.y;
                var xDelta_a = B.x - A.x;
                var yDelta_b = C.y - B.y;
                var xDelta_b = C.x - B.x;

                var aSlope = yDelta_a / xDelta_a;
                var bSlope = yDelta_b / xDelta_b;

                var x = (aSlope*bSlope*(A.y - C.y) + bSlope*(A.x + B.x) - aSlope*(B.x+C.x) )/(2* (bSlope-aSlope) );
                var y = -1*(x - (A.x+B.x)/2)/aSlope +  (A.y+B.y)/2;
                return {x: x, y: y};
            },
            findIntercepts(pt1, pt2) {
                let s = parseInt(this.sweepPos);
                let xDiff = pt1.x - pt2.x;
                if (xDiff == 0) return (pt1.y + pt2.y) / 2;
                let yDiff = pt1.y - pt2.y;
                let b1md = s - pt1.x;
                let b2md = s - pt2.x;
                let h1 = (pt1.y * b2md - pt2.y * b1md) / xDiff;
                let h2 = Math.sqrt(b1md * b2md * (xDiff ** 2 + yDiff ** 2)) / xDiff;
                let y1 = h1 + h2;
                let y2 = h1 - h2;
                return [{x: (((y1 - pt1.y) ** 2) + (pt1.x ** 2) - (s ** 2)) / (2 * (pt1.x - s)), y: y1}, {x: (((y2 - pt1.y) ** 2) + (pt1.x ** 2) - (s ** 2)) / (2 * (pt1.x - s)), y: y2}];
            },
            trimIntercepts(intercepts) {
                result = [];
                for (let i = 0; i < intercepts.length; i++) {
                    if (!(intercepts[i].x < 0 || intercepts[i].x > 1000 || intercepts[i].y < 0 || intercepts[i].y > 1000)) {
                        result.push(intercepts[i]);
                    }
                }
                return result;
            },
            findContact(pt1, pt2) {
                let intercepts = trimIntercepts(this.findIntercepts(pt1, pt2));
                if (intercepts.length == 2) {
                    intercepts.sort((a, b) => {b.x - a.x});
                }
                return intercepts;
            },
            findFrontContact() {

            },
            genArcStr(pt) {
                var result = "";
                var dist = Math.sqrt((this.sweepPos ** 2) - (pt.x ** 2));
                var beg = [0, pt.y + dist];
                var end = [0, pt.y - dist];
                var ctr = [this.sweepPos + pt.x, pt.y];
                result += "M" + beg[0] + "," + beg[1] + " ";
                result += "Q" + ctr[0] + "," + ctr[1] + " ";
                result += end[0] + "," + end[1];
                return result;
            },
            update() {
                if (this.sweepPos >= this.queue[0].x) {
                    let event = this.queue.shift();
                    if (event.type == 0) {
                        var entry = {pt: event.pt, top: null, bot: null};
                        if (this.activ.length == 1) {
                            let list = this.findContact(this.activ[0].pt, event.pt);
                            if (list.length == 0) {
                                if (event.pt.y > this.activ[0].pt.y) {
                                    this.activ[0].bot = event.pt;
                                    entry.top = this.activ[0].pt;
                                    this.activ.push(entry);
                                }
                                else {
                                    this.activ[0].top = event.pt;
                                    entry.bot = this.activ[0].pt;
                                    this.activ.unshift(entry);
                                }
                            }
                            else if (list.length == 1) {
                                if (event.pt.y > list[0].y) {
                                    this.activ[0].bot = event.pt;
                                    entry.top = this.activ[0].pt;
                                    this.activ.push(entry);
                                }
                                else {
                                    this.activ[0].top = event.pt;
                                    entry.bot = this.activ[0].pt;
                                    this.activ.unshift(entry);
                                }
                            }
                            else if (list.length == 2) {
                                this.activ[0].bot = event.pt;
                                entry.top = this.activ[0].pt;
                                entry.bot = this.activ[0].pt;
                                this.activ.push(entry);
                                this.activ.push({pt: this.activ[0].pt, top: event.pt, bot: null});
                            }
                        }
                        else if (this.activ.length > 1) {
                            //FIND FOREMOST CONTACT ON EACH SIDE OF THE FOCUS
                            //PARSE THROUGH EXISTING ACTIV LIST TO FIND WHERE INTERSECTS FIT
                            //SPLICE INTO LIST
                            //HANDLE ELIMINATIONS AND FRAGMENTATIONS
                        }
                    }
                }
            }
        }
    }
</script>