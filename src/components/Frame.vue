<script setup>
    import NavStrip from './NavStrip.vue'
</script>

<template>
    <div class="wrap" :style="{ zIndex: pos, left: off }">
        <div class="cont">
            <slot/>
        </div>
        <NavStrip :glass="glass" :title="title" :color="color" @click="$emit('toggle', pos)"/>
    </div>
</template>

<script>
    export default {
        props: [
            'title',
            'color',
            'glass',
            'pos',
            'off',
        ],
        // data() {
        // }
    }
</script>

<style scoped>
    .wrap {
        height: 100%;
        display: flex;
        position: fixed;
        transition: left 0.5s;
    }
    .cont {
        width: calc(100vw - 160px);
        height: 100%;
        display: flex;
        background-color: var(--bg-dark);
    }
</style>