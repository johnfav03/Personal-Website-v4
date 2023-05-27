<script setup>
    import PolyBg from './components/PolyBg.vue'
    import TitleCard from './components/TitleCard.vue'
    import AboutMe from './components/AboutMe.vue'
</script>

<template>
    <div class="scrollCont">
        <div class="pageTwo">
            <div class="titleBg"></div>
            <PolyBg/>
        </div>
        <div class="pageTwo">
            <AboutMe/>
        </div>
        <TitleCard/>
    </div>
</template>

<style scope>
    .titleBg {
        width: 320px;
        height: 320px;
        background-color: white;
        position: fixed;
        display: block;
        top: calc(50vh - 160px);
        left: calc(50vw - 160px);
    }
    .scrollCont {
        overflow-y: scroll;
        scroll-snap-type: y mandatory;
        height: 100vh;
        width: 100vw;
    }
    .pageTwo {
        background-color: #222;
        width: 100vw;
        height: 100vh;
        scroll-snap-align: start;
        position: relative;
    }
</style>