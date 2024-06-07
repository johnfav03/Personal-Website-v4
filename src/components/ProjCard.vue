<template>
    <div class="card" tabindex="0">
        <div class="card-cont">
            <div class="techs" :style="{ backgroundImage: `url(${image})` }"></div>
            <div class="text-block">
                <div class="title-block">
                    <h1>{{ title }}</h1>
                    <h2>{{ date }}</h2>
                </div>
                <p>{{ messg }}</p>
            </div>
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
            'techs',
        ],
    }
</script>

<style scoped>
    .card {
        height: 120px;
        position: relative;
        z-index: 0;
        display: block;
    }
    .card-cont {
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        background-color: #1E1E1E;
        padding: 15px;
        z-index: 4;
        display: flex;
        flex-direction: row;
    }
    .card-cont h1 {
        font-size: 18px;
        float: left;
    }
    .card-cont h2 {
        font-size: 15px;
        height: 20px;
        line-height: 20px;
        display: block;
        color: var(--acc-two);
        opacity: 0.8;
        float: right;
    }
    .card-cont p {
        padding-top: 5px;
        display: block;
        font-size: 14px;
    }
    .techs {
        height: 100%;
        aspect-ratio: 1/1;
        display: block;
        float: left;
        margin-right: 15px;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
    .title-block {
        flex-grow: 1;
        display: flex;
        justify-content: space-between;
    }
    .hidden-img {
        position: absolute;
        height: calc(100% - 30px);
        aspect-ratio: 1/1;
        top: 15px;
        left: 15px;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        border-radius: 10px;
        pointer-events: none;
        z-index: 3;
    }
    .card:focus {
        z-index: 5;
    }
    .card:focus .hidden-img {
        animation: bounce 0.5s;
        height: calc(100% - 30px);
        aspect-ratio: 1/1;
        border-radius: 0;
        top: 15px;
        left: 15px;
        z-index: 5;
    }
    .card:not(:focus) .hidden-img {
        animation: unbounce 0.5s;
    }
    @keyframes bounce {
        0% {
            top: 15px;
            left: 15px;
            z-index: 3;
            transform: rotate(8deg);
            border-radius: 10px;
            height: 20%;
        }
        45% {
            top: -100px;
            left: 100px;
            transform: rotate(8deg);
            z-index: 3;
        }
        55% {
            top: -100px;
            left: 100px;
            transform: rotate(8deg);
            z-index: 5;
        }
        100% {
            top: 15px;
            right: 15px;
            border-radius: 0;
            z-index: 5;
        }
    }
    @keyframes unbounce {
        0% {
            top: 15px;
            right: 15px;
            border-radius: 0;
            z-index: 5;
        }
        45% {
            top: -100px;
            left: 100px;
            transform: rotate(8deg);
            z-index: 5;
        }
        55% {
            top: -100px;
            left: 100px;
            transform: rotate(8deg);
            z-index: 3;
        }
        100% {
            top: 15px;
            left: 15px;
            z-index: 3;
            transform: rotate(8deg);
            border-radius: 10px;
            height: 20%;
        }
    }
</style>