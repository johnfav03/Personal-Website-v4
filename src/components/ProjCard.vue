<template>
    <div class="card" tabindex="0">
        <div class="card-cont">
            <div class="techs" :style="{ backgroundImage: `url(${image})` }"></div>
            <div class="text-block">
                <div class="title-block">
                    <h1 v-if="!link">{{ title }}</h1>
                    <h1 v-else><a :href=link target="_blank">{{ title }}</a></h1>
                </div>
                <p>{{ messg }}</p>
                <div class="tech-cont">
                    <span class="tech-box" v-for="tech in techs" :key="tech">{{ tech }}</span>
                </div>
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
            'link',
            'techs',
        ],
    }
</script>

<style scoped>
    .tech-cont {
        display: flex;
        flex-direction: row;
        margin-top: 10px;
        width: 100%;
        height: 22px;
        gap: 5px;
    }
    .tech-box {
        height: 100%;
        background-color: var(--bg-dark);
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0px 8px;
        font-size: 12px;
        font-weight: 200;
        letter-spacing: 0.2px;
        color: #666;
        border-radius: 5px;
    }
    .card {
        height: 145px;
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
        padding-right: 20px;
        z-index: 4;
        display: flex;
        flex-direction: row;
        border-radius: 3px;
    }
    .card-cont h1 {
        float: left;
        font-size: 18px;
        font-weight: 500;
        letter-spacing: 0.4px;
        color: var(--acc-two);
    }
    .card-cont h1 a {
        color: var(--acc-two);
    }
    .card-cont h2 {
        float: right;
        font-size: 18px;
        font-weight: 300;
        letter-spacing: 0.2px;
        color: var(--acc-two);
    }
    .card-cont p {
        padding-top: 5px;
        display: block;
        font-size: 14px;
        font-weight: 200;
        letter-spacing: 0.2px;
        color: #AAA;
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
        border-radius: 3px;
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
        border-radius: 3px;
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
        border-radius: 3px;
    }
    .card:not(:focus) .hidden-img {
        animation: unbounce 0.5s;
        border-radius: 3px;
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