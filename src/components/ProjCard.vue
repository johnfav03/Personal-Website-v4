<template>
    <div class="card">
        <div class="hidden-img" :style="{ backgroundImage: `url(${image})` }">
        </div>
        <div class="card-cont">
            <h1>{{ title }}</h1>
            <h2>{{ date }}</h2>
            <p>{{ messg }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: [
            'image',
            'messg',
            'title',
            'date',
        ],
    }
</script>

<style scoped>
    .card {
        height: 220px;
        position: relative;
        z-index: 0;
    }
    .card-cont {
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        background-color: #2E2E2E;
        padding: 15px;
    }
    .card-cont h1 {
        font-size: 25px;
        width: calc(100% - 90px);
        height: 45px;
        line-height: 45px;
        display: block;
    }
    .card-cont h2 {
        font-size: 15px;
        height: 20px;
        line-height: 20px;
        display: block;
        color: var(--acc-two);
        opacity: 0.8;
    }
    .card-cont p {
        padding-top: 15px;
        display: block;
    }

    .hidden-img {
        position: absolute;
        height: 60%;
        width: 50%;
        top: 1px;
        right: 0;
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 10px;
        pointer-events: none;
    }
    .card:hover {
        z-index: 1;
    }
    .card:hover .hidden-img {
        animation: bounce 0.2s;
        width: 100%;
        height: 100%;
        border-radius: 0;
        z-index: 2;
    }
    .card:not(:hover) .hidden-img {
        animation: unbounce 0.2s;
    }
    @keyframes bounce {
        0% {
            top: 0;
            right: 0;
            z-index: -1;
        }
        50% {
            top: -50%;
            right: -50px;
            transform: rotate(6deg);
            z-index: -1;
        }
        100% {
            top: 0;
            right: 0;
            width: 100%;
            height: 100%;
            border-radius: 0;
            z-index: 2;
        }
    }
    @keyframes unbounce {
        0% {
            top: 0;
            right: 0;
            width: 100%;
            height: 100%;
            border-radius: 0;
            z-index: 2;
        }
        50% {
            top: -50%;
            right: -50px;
            transform: rotate(6deg);
            z-index: -1;
        }
        100% {
            top: 0;
            right: 0;
            z-index: -1;
            transform: rotate(0deg);
        }
    }
</style>