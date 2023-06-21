<script setup>
    import Frame from './components/Frame.vue'
    import ProjCard from './components/ProjCard.vue'
</script>

<template>
    <Frame pos="2" :glass="glass" :off="oneOff" title="HOME" color="--acc-one" @toggle="togglePos($event)">
        <div class="cont">
            <div class="bg-img"></div>
            <div class="layer"></div>
            <div class="txt-cont">
                <h2>HELLO, MY NAME IS</h2>
                <h1>JOHN FAVRET</h1>
                <p>I'm currently a student at the Unversity of Michigan, pursuing a major in Computer Science and a minor in Electrical Engineering. At the moment, I'm working as a Software Engineering Intern at EnergySage. Check out some of the tabs to the right to learn more!</p>
            </div>
        </div>
    </Frame>
    <Frame pos="1" :glass="glass" :off="twoOff" title="PROJECTS" color="--acc-two" @toggle="togglePos($event)">
        <div class="cont">
            <div class="inner one">
                <h2>CHECK OUT SOME OF MY FAVORITE</h2>
                <h1>PROJECTS</h1>
                <div class="proj-grid">
                    <ProjCard 
                        image="src/assets/stick-sim.png"
                        title="STICK SHIFT SIM"
                        messg="This was the final project for EECS 498, a self-led project, which utilized VR through Unreal to deliver an immersive manual driving trainer, complete with realistic physics and grip controls."
                        date="WN 2023"
                    />
                    <ProjCard 
                        image="src/assets/a2-go.png"
                        title="ANN ARBOR GO!"
                        messg="This was the second project for EECS 498, which uses Unity and Mapbox to replicate both the geolocational and AR features of Pokemon Go, but themed for Ann Arbor."
                        date="WN 2023"
                    />
                    <ProjCard 
                        image="src/assets/vue-weather.png"
                        title="WEATHER APP"
                        messg="Developed in Vue.js, this project was started to learn front-end frameworks and API calls. The web app features geolocational search as well as live weather and temperature from the OpenWeather API."
                        date="FA 2022"
                    />
                    <ProjCard 
                        image="src/assets/django-dz.png"
                        title="IMAGE DROPZONE"
                        messg="This project was meant to help learn backend concepts, and uses a simple front-end with Dropzone.js to pass images to Django, so they can be cached and displayed on the next page."
                        date="WN 2022"
                    />
                    <ProjCard 
                        image="src/assets/wordle.png"
                        title="WORDLE EVALUATOR"
                        messg="Utilizing the terminal, this program analyzed starting words, either from input or a database, for both positional and non-specific likelihood, giving each a score and storing the top results. "
                        date="FA 2021"
                    />
                    <ProjCard 
                        image="src/assets/eng-club.png"
                        title="ENGINEERING CLUB"
                        messg="I founded and nurtured this organization in high school with a close friend, where I took up the position of Education Chair teaching C++ and basic circuity targeted at Arduino Microcontrollers."
                        date="WN 2020"
                    />
                    <ProjCard 
                        image="src/assets/wii-nunchuk.png"
                        title="NUNCHUK BATTLESHIP"
                        messg="In this project, I rewired an old Ninento Nunchuk to and Arduino along with an 8x8 LED matrix, allowing the user to play Battleship against a randomly guessing computer player."
                        date="FA 2018"
                    />
                    <ProjCard 
                        image="src/assets/flappy-bird.png"
                        title="FLAPPY BIRD"
                        messg="This was the capstone project for my first computer science course, and used Java and Greenfoot to simulate the then-popular mobile game, flappy bird, using custom sprites and adjustable gravity."
                        date="FA 2017"
                    />
                    <ProjCard 
                        image="src/assets/valentine.png"
                        title="V-DAY OPERATION"
                        messg="This was a device I made in middle school as a Valentine's Day gift; it was a themed version of the game 'operation', triggering a buzzer if the pair of tweezers contacted the metal heart."
                        date="WN 2016"
                    />
                </div>
            </div>
        </div>
    </Frame>
    <Frame pos="0" :glass="glass" :off="thrOff" title="ABOUT ME" color="--acc-thr" @toggle="togglePos($event)">
        <div class="cont">
            <div class="inner two">
                <h2>HERE'S MORE</h2>
                <h1>ABOUT ME</h1>
                <div class="proj-grid"></div>
            </div>
        </div>
    </Frame>
</template>

<script>
    export default {
        data() {
            return {
                oneOff: '0px',
                twoOff: '55px',
                thrOff: '110px',
                stage: 2,
                glass: false,
            };
        },
        methods: {
            togglePos(pos) {
                if (pos == this.stage) {
                    if (pos === '0') {
                        pos = '2';
                    }
                    else {
                        pos--;
                    }
                }
                if (pos == 2) {
                    this.stage = pos;
                    this.oneOff = '0px';
                    this.twoOff = '55px';
                }
                else if (pos == 1) {
                    this.stage = pos;
                    this.oneOff = 'calc(160px - 100vw)';
                    this.twoOff = '55px';
                }
                else if (pos == 0) {
                    this.stage = pos;
                    this.oneOff = 'calc(160px - 100vw)';
                    this.twoOff = 'calc(215px - 100vw)';
                }
                if (pos == 0) {
                    this.glass = true;
                }
                else {
                    this.glass = false;
                }
            }
        },
    }
</script>

<style scoped>
    .cont {
        width: 100%;
        height: 100%;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .bg-img {
        width: 100%;
        height: 100%;
        background-image: url(./assets/IMG_2923.jpg);
        background-repeat: no-repeat;
        background-size: cover; 
        background-position: 0% 65%;
        position: absolute;
        top: 0;
        left: 0;
    }
    .layer {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: linear-gradient(to right, rgba(0, 0, 0, 0.80), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.5));
    }
    .txt-cont {
        position: absolute;
        top: 30%;
        left: 10%;
    }

    .txt-cont h1 {
        font-size: 66px;
        color: var(--acc-one);
    }
    h2 {
        font-size: 25px;
    }
    .txt-cont p {
        margin-top: 30px;
        font-size: 20px;
        width: 63%;
    }
    .inner {
        width: 90%;
        height: 90%;
        overflow-y: scroll;
        z-index: 1;
    }
    .one h1 {
        font-size: 66px;
        color: var(--acc-two);
    }

    .two h1 {
        font-size: 66px;
        color: var(--acc-thr);
    }
    .overlay {
        width: 100%;
        height: 100%;
        opacity: 0.03;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
    }
    .proj-grid {
        margin-top: 50px;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        grid-gap: 30px;
    }
</style>