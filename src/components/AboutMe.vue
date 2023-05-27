<template>
    <div class="titleBg"></div>
    <div class="picCard one">
        <img src="../assets/IMG_3014.jpg"/>
    </div>
    <div class="picCard two">
        <img src="../assets/IMG_2803.jpg"/>
    </div>
    <div class="picCard three">
        <img src="../assets/DSC09052_Original.jpg"/>
    </div>
    <div class="picCard four">
        <img src="../assets/IMG_2923.jpg"/>
    </div>
</template>

<style scoped>
    .titleBg {
        width: 320px;
        height: 320px;
        background-color: white;
        position: absolute;
        display: block;
        top: calc(50vh - 160px);
        left: calc(50vw - 160px);
    }
    .picCard {
        width: 160px;
        height: 160px;
        background-color: white;
        position: absolute;
        display: block;
    }
    .picCard img {
        display: block;
        width: 95%;
        height: 95%;
        margin: 2.5%;
    }
    .one {
        top: calc(50vh - 80px);
        left: calc(50vw - 480px);
    }
    .two {
        top: calc(50vh - 80px);
        left: calc(50vw - 320px);
    }
    .three {
        top: calc(50vh - 80px);
        left: calc(50vw + 160px);
    }
    .four {
        top: calc(50vh - 80px);
        left: calc(50vw + 320px);
    }
</style>