<script setup>
    import NavStrip from './NavStrip.vue'
</script>

<template>
    <Transition>
    <div class="wrap" :style="transitionStyle">
        <div class="cont">
            <slot/>
        </div>
        <NavStrip :title="title" :color="color" @click="$emit('toggle', pos)"/>
    </div>
</Transition>
</template>

<script>
    export default {
        props: [
            'title',
            'color',
            'pos',
            'off',
        ],
        // data() {
        // }
        computed: {
            transitionStyle() {
                return {
                    'zIndex': this.pos,
                    left: this.off,
                };
            },
        },
    };
</script>

<style scoped>
    .wrap {
        height: 100%;
        display: flex;
        position: fixed;
        transition: left 0.5s;
    }
    .cont {
        width: calc(100vw - 130px);
        height: 100%;
        display: flex;
        background-color: var(--bg-dark);
    }
</style>