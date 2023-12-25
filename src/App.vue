<script setup>
    import Frame from './components/Frame.vue'
    import ProjCard from './components/ProjCard.vue'
</script>

<template>
    <div class="mobile-error">SORRY, NO MOBILE PAGE AVAILABLE</div>
    <Frame pos="2" :off="oneOff" title="HOME" color="--acc-one" @toggle="togglePos($event)">
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
                <p>To take a closer look, check out my <a href="https://github.com/johnfav03" target="_blank">GitHub</a>, or click on each card! 🖱️👈</p>
                <div class="proj-grid">
                    <ProjCard 
                        image="othello-ai.png"
                        title="ALPHAZERO OTHELLO"
                        messg="After implementing a Monte-Carlo Tree Search to an Othello neural network for my AI class, I built a genetic algorithm to optimize hyper-parameters, increasing winrate from 66% to 90%."
                        date="FA 2023"
                    />
                    <ProjCard 
                        image="traf-cont.png"
                        title="TRAFFIC CONTROLLER"
                        messg="This was a school project for Logic Design, for which we had to design and build a sequential controller in Verilog that output to several 8-seg displays and maintained an internal counter."
                        date="FA 2023"
                    />
                    <ProjCard 
                        image="mbta-pred.png"
                        title="MBTA PREDICTOR"
                        messg="This project was a machine learning model using the Python library Tensorflow to predict the travel times of the Boston T, and used GitHub Actions to make and refine its predictions daily."
                        date="SM 2023"
                    />
                    <ProjCard 
                        image="quote-api.png"
                        title="QUOTE API"
                        messg="This project is a RESTful API, connected to a database. The purpose was to help learn caching, SwaggerUI, and OAuth. It's connected to this site, and its random/ endpoint is on the next page."
                        date="SM 2023"
                    />
                    <ProjCard 
                        image="branch-sage.png"
                        title="BRANCH SAGE"
                        messg="This started as a bash script to manage branches following a naming convention, then incorporated tools like the Jira and GitHub APIs to generate branch names and automate processes."
                        date="SM 2023"
                    />
                    <ProjCard 
                        image="stick-sim.png"
                        title="STICK SHIFT SIM"
                        messg="This was the final project for EECS 498, a self-led project, which utilized VR through Unreal to deliver an immersive manual driving trainer, complete with realistic physics and grip controls."
                        date="WN 2023"
                    />
                    <ProjCard 
                        image="a2-go.png"
                        title="ANN ARBOR GO!"
                        messg="This was the second project for EECS 498, which uses Unity and Mapbox to replicate both the geolocational and AR features of Pokemon Go, but themed for Ann Arbor."
                        date="WN 2023"
                    />
                    <ProjCard 
                        image="vue-weather.png"
                        title="WEATHER APP"
                        messg="Developed in Vue.js, this project was started to learn front-end frameworks and API calls. The web app features geolocational search as well as live weather and temperature from the OpenWeather API."
                        date="FA 2022"
                    />
                    <ProjCard 
                        image="django-dz.png"
                        title="IMAGE DROPZONE"
                        messg="This project was meant to help learn backend concepts, and uses a simple front-end with Dropzone.js to pass images to Django, so they can be cached and displayed on the next page."
                        date="WN 2022"
                    />
                    <ProjCard 
                        image="wordle.png"
                        title="WORDLE EVALUATOR"
                        messg="Utilizing the terminal, this program analyzed starting words, either from input or a database, for both positional and non-specific likelihood, giving each a score and storing the top results. "
                        date="FA 2021"
                    />
                    <ProjCard 
                        image="eng-club.png"
                        title="ENGINEERING CLUB"
                        messg="I founded and nurtured this organization in high school with a close friend, where I took up the position of Education Chair teaching C++ and basic circuity targeted at Arduino Microcontrollers."
                        date="WN 2020"
                    />
                    <ProjCard 
                        image="wii-nunchuk.png"
                        title="NUNCHUK BATTLESHIP"
                        messg="In this project, I rewired an old Ninento Nunchuk to and Arduino along with an 8x8 LED matrix, allowing the user to play Battleship against a randomly guessing computer player."
                        date="SM 2018"
                    />
                    <ProjCard 
                        image="flappy-bird.png"
                        title="FLAPPY BIRD"
                        messg="This was the capstone project for my first computer science course, and used Java and Greenfoot to simulate the then-popular mobile game, flappy bird, using custom sprites and adjustable gravity."
                        date="FA 2017"
                    />
                    <ProjCard 
                        image="valentine.png"
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
                <div class="about-left">
                    <span class="quote"><span class="acc">" </span>{{ quote.content }}<span class="acc"> "</span> <br><span class="auth">--{{ quote.author }}</span></span>
                    <h3>My Experience with Web Development</h3>
                    <p>Computer science was a hobby of mine long before it was a career; in high school, I started to utilize those skills professionally and began developing websites freelance. It started with just static html and css, but eventually the demands grew and I learned javascript, which later led me to frameworks and modern web development. This is blossomed into my full time career, where I now work in a full-stack role when I’m not studying.</p>
                    <h3>My Experience with Embedded Systems</h3>
                    <p>Also in high school, around when I started freelancing, I also helped a friend start an engineering club at our school. He took up the role of president, and I took on the role of Education Chair, teaching our members C++ and circuitry for Arduino and simple robotics. Together, we fostered the club; just before COVID, we participated in a county-wide invention competition, and our automated table-cleaning robot won first place, securing us 1k for future club funding. This is still one of my favorite ways of creating, and most of my projects for fun are still Arduino-based.</p>
                </div>
                <div class="about-right">
                    <div style="backgroundImage: url(backpack.jpg)"></div>
                    <div style="backgroundImage: url(face.jpg)" id="face"></div>
                    <div style="backgroundImage: url(ice.jpg)"></div>
                </div>
            </div>
        </div>
    </Frame>
</template>

<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                oneOff: '0px',
                twoOff: '45px',
                thrOff: '90px',
                stage: 2,
                glass: false,
                quote: {
                    'author': 'place',
                    'content': 'holder',
                },
            };
        },
        async mounted() {
            try {
                const response = await axios.get(
                    "https://api.johnfav.me/random"
                );
                this.quote = response.data;
            } catch (error) {
                console.log(error);
            }
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
                    this.twoOff = '45px';
                }
                else if (pos == 1) {
                    this.stage = pos;
                    this.oneOff = 'calc(130px - 100vw)';
                    this.twoOff = '45px';
                }
                else if (pos == 0) {
                    this.stage = pos;
                    this.oneOff = 'calc(130px - 100vw)';
                    this.twoOff = 'calc(175px - 100vw)';
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
        width: 60%;
    }
    .inner {
        width: 90%;
        height: 90%;
        overflow-y: scroll;
        scrollbar-width: 0px !important;
        z-index: 1;
    }
    .inner {
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
    .inner::-webkit-scrollbar {
        display: none;
    }
    .one h1 {
        font-size: 66px;
        color: var(--acc-two);
    }

    .one p {
        margin-top: 15px;
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
    .mobile-error {
        display: none;
    }
    .about-left {
        width: 60%;
        display: flex;
        float: left;
        flex-direction: column;
        gap: 20px;
        padding: 30px 0px;
        overflow-y: scroll;
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
    .about-left::-webkit-scrollbar {
        display: none;
    }
    .about-right {
        width: 35%;
        padding-left: 15%;
        display: flex;
        flex-direction: column;
        gap: 20px;
        height: 70vh;
    }
    .about-right div {
        height: calc(33% - 10px);
        width: 100%;
        display: block;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .quote {
        margin-top: -20px;
        padding: 20px;
        font-size: 1.08vw;
    }
    .quote .acc {
        color: var(--acc-thr);
        font-size: 20px;
        line-height: 30px;
    }
    .quote .auth {
        color: var(--acc-thr);
        font-size: 14px;
        line-height: 30px;
    }
    #face {
        background-position: 0% 75%;
    }
    @media screen and (max-width: 768px) {
        .mobile-error {
            display: flex;
            justify-content: center;
            align-items: center;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: var(--bg-dark);
            color: #FFF;
            font-size: 20px;
            z-index: 5;
        }
    }
</style>