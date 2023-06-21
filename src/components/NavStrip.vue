<script setup>
    import PolyBg from './PolyBg.vue'
</script>

<template>
    <span>
        <PolyBg class="over"/>
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
        ],
    }
</script>

<style scoped>
    span {
        display: block;
        width: 40px;
        height: 100%;
        position: relative;
    }
    .over {
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
        transition: opacity 0.2s;
    }
    .over:hover {
        opacity: 0.2;
    }
    .bar {
        background-color: var(--bg-color);
        color: var(--tx-dark);
        width: 40px;
        height: 100%;
        padding-top: 25px;
    }
    h1 {
        font-size: 25px;
        height: 40px;
        line-height: 40px;
        transform: rotate(90deg) translateY(-100%);
        transform-origin: top left;
        white-space: nowrap;
        color: inherit;
    }
</style>
