<script setup>
    import PolyBg from './PolyBg.vue'
</script>

<template>
    <span>
        <PolyBg class="over" :class="{ show: glass }"/>
        <div class="bar" :style="{ backgroundColor: `var(${color})`}">
            <h1>{{ title }}</h1>
        </div>
    </span>
</template>

<script>
    export default {
        props: [
            'title',
            'color',
            'glass',
        ],
    }
</script>

<style scoped>
    span {
        display: block;
        width: 50px;
        height: 100%;
        position: relative;
    }
    .over {
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
        transition: opacity 0.5s;
    }
    .show {
        opacity: 0.15;
    }
    .bar {
        background-color: var(--bg-color);
        color: var(--tx-dark);
        width: 50px;
        height: 100%;
        padding-top: 25px;
    }
    .bar:hover {
        color: #FFF;
    }
    h1 {
        font-size: 25px;
        height: 50px;
        line-height: 50px;
        transform: rotate(90deg) translateY(-100%);
        transform-origin: top left;
        white-space: nowrap;
        color: inherit;
    }
</style>
