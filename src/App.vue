<script setup>
    import Frame from './components/Frame.vue'
    import ProjCard from './components/ProjCard.vue'
</script>

<template>
    <div class="mobile-error">SORRY, NO MOBILE PAGE AVAILABLE</div>
    <Frame pos="2" :off="oneOff" title="HOME" color="--acc-one" @toggle="togglePos($event)">
        <div class="cont">
            <div class="txt-cont">
                <div class="intro-box">
                    <div class="headshot"></div>
                    <div class="intro-text">
                        <h2>HI, MY NAME IS</h2>
                        <h1>JOHN FAVRET</h1>
                    </div>
                </div>
                <p>I'm currently a student at the <strong>Unversity of Michigan</strong>, 
                    pursuing a major in <strong>Computer Science</strong> alongside a minor in 
                    <strong>Electrical Engineering</strong>.<br><br>

                    When I’m not busy with school, you can usually find me 
                    building (or breaking) something, taking long walks, 
                    listening to music, cross-stitching, or shopping for houseplants. 
                    If you’d like to chat, feel free to shoot me an email at 
                    <strong>johnfav@umich.edu</strong>.<br><br>

                    Check out some of the tabs to the right to see 
                    some of my work or get to know me a bit better!</p>
            </div>
        </div>
        <div class="img-cont">
            <div class="fade-layer"></div>
            <div class="bg-img"></div>
        </div>
    </Frame>
    <Frame pos="1" :glass="glass" :off="twoOff" title="PROJECTS" color="--acc-two" @toggle="togglePos($event)">
        <div class="cont">
            <div class="proj-cont">
                <div class="intro-box">
                    <div class="intro-text">
                        <h2>CHECK OUT SOME OF MY</h2>
                        <h1>PROJECTS</h1>
                    </div>
                </div>
                <div class="proj-grid">
                    <div class="sect-title">
                        <p>
                            These are my current favorites<span class="colon"> :</span>
                        </p>
                    </div>
                    <div class="spacer"></div>
                    <ProjCard 
                        image="qsor-model.png"
                        title="QSOR SCENT CLASSIFIER"
                        messg="This project was a GCN implemented in Pytorch and deployed it to AWS Fargate using Docker. The model was based on a research paper, and I learned a lot even though it didn't perform quite as well as the paper."
                        date="SM 24"
                    />
                    <div class="spacer"></div>
                    <ProjCard 
                        image="steane-code.png"
                        title="STEANE DECODER"
                        messg="EECS 479 was my first venture into the Quantum Computing; the final project was an error correction circuit for the Steane encoding using Qiskit, complete with a decoder and fault-tolerant gates."
                        date="FA 23"
                    />
                    <div class="spacer"></div>
                    <ProjCard 
                        image="quote-api.png"
                        title="QUOTE API"
                        messg="This project is a RESTful API, connected to a database. The purpose was to help learn caching, SwaggerUI, and OAuth. Its 'random/' endpoint is connected to the next page, try refreshing a few times!"
                        date="SM 23"
                    />
                    <div class="spacer"></div>
                    <ProjCard 
                        image="stick-sim.png"
                        title="STICK SHIFT SIM"
                        messg="This was the final project for EECS 498, a self-led project, which used Unreal Engine 5 to deliver an immersive Virtual Reality simulator for driving manual, featuring realistic physics and grip controls."
                        date="WN 23"
                    />
                    <div class="spacer"></div>
                    <div class="spacer"></div>
                    <div class="sect-title">
                        <p>
                            And these make up the rest of my collection<span class="colon"> :</span>
                        </p>
                    </div>
                    <div class="spacer"></div>
                    <ProjCard 
                        image="fire-car.png"
                        title="FIREFIGHTING CAR"
                        messg="This was a self-led project for my Embedded Sys class, where we used 2 STM32s to remotely control a chassis with a swiveling IR sensor assembly, designed to locate fires and fire victims."
                    />
                    <div class="spacer"></div>
                    <ProjCard 
                        image="othello-ai.png"
                        title="ALPHAZERO OTHELLO"
                        messg="After implementing a Monte-Carlo Tree Search to an Othello neural network for my AI class, I built a genetic algorithm on my own to optimize hyper-parameters, drastically increasing the winrate."
                        date="FA 23"
                    />
                    <div class="spacer"></div>
                    <ProjCard 
                        image="mbta-pred.png"
                        title="MBTA PREDICTOR"
                        messg="This project was a machine learning model using the Python library Tensorflow to predict the travel times of the Boston T, and used GitHub Actions to make and refine its predictions daily."
                        date="SM 23"
                    />
                    <div class="spacer"></div>
                    <ProjCard 
                        image="branch-sage.png"
                        title="BRANCH SAGE"
                        messg="This started as a bash script to manage branches following a naming convention, then incorporated tools like the Jira and GitHub APIs to generate branch names and automate processes."
                        date="SM 23"
                    />
                    <div class="spacer"></div>
                    <ProjCard 
                        image="a2-go.png"
                        title="ANN ARBOR GO!"
                        messg="This was the second project for EECS 498, which uses Unity and Mapbox to replicate both the geolocational and AR features of Pokemon Go, but themed for Ann Arbor."
                        date="WN 23"
                    />
                    <div class="spacer"></div>
                    <ProjCard 
                        image="vue-weather.png"
                        title="WEATHER APP"
                        messg="Developed in Vue.js, this project was started to learn front-end frameworks and basic API structure. The web app features geolocational search as well as live weather and temperature from the OpenWeather API."
                        date="FA 22"
                    />
                    <div class="spacer"></div>
                    <ProjCard 
                        image="django-dz.png"
                        title="IMAGE DROPZONE"
                        messg="This project was meant to help learn backend structure and concepts, using a simple front-end with Dropzone.js to pass images to Django so they can be stored and displayed on the next page."
                        date="WN 22"
                    />
                    <div class="spacer"></div>
                    <ProjCard 
                        image="wordle.png"
                        title="WORDLE EVALUATOR"
                        messg="Utilizing the terminal, this program analyzed starting words, either from input or a database, for both positional and non-specific likelihood, giving each a score and storing the top results. "
                        date="FA 21"
                    />
                    <div class="spacer"></div>
                    <ProjCard 
                        image="eng-club.png"
                        title="ENGINEERING CLUB"
                        messg="I founded and nurtured this organization in high school with a close friend, where I took up the position of Education Chair teaching C++ and basic circuity targeted at Arduino Microcontrollers."
                        date="WN 20"
                    />
                    <div class="spacer"></div>
                    <ProjCard 
                        image="flappy-bird.png"
                        title="FLAPPY BIRD"
                        messg="This was the capstone project for my first computer science course, and used Java and Greenfoot to simulate the then-popular mobile game, flappy bird, using custom sprites and adjustable gravity."
                        date="FA 17"
                    />
                    <div class="spacer"></div>
                    <ProjCard 
                        image="valentine.png"
                        title="V-DAY OPERATION"
                        messg="This was a device I made in middle school as a Valentine's Day gift; it was a themed version of the game 'operation', triggering a buzzer if the pair of tweezers contacted the metal heart."
                        date="WN 16"
                    />
                </div>
                <p>To take a closer look, check out my <a href="https://github.com/johnfav03" target="_blank">GitHub</a> 👈</p>
            </div>
        </div>
    </Frame>
    <Frame pos="0" :glass="glass" :off="thrOff" title="EXPERIENCES" color="--acc-thr" @toggle="togglePos($event)">
        <div class="cont">
            <div class="exp-cont">
                <h2>HERE'S MORE ON MY</h2>
                <h1>EXPERIENCES</h1>
                <span class="quote"><span class="acc">" </span>{{ quote.content }}<span class="acc"> "</span> <br><span class="auth">--{{ quote.author }}</span></span>
                <div class="spacer"></div>
                <p>Early Life</p>
                <div class="desc-box">
                    <p>Computer science was a hobby of mine long before it was a career; in high school, I started to utilize those skills professionally and began developing websites freelance. It started with just static html and css, but eventually the demands grew and I learned javascript, which later led me to frameworks and modern web development. This is blossomed into my full time career, where I now work in a full-stack role when I’m not studying.</p>
                </div>
                <div class="spacer"></div>
                <p>College <span class="dark-txt">[Freshman & Sophmore]</span></p>
                <div class="desc-box">
                    <p>Also in high school, around when I started freelancing, I also helped a friend start an engineering club at our school. He took up the role of president, and I took on the role of Education Chair, teaching our members C++ and circuitry for Arduino and simple robotics. These days, I'm pursuing this interest in the form of an Electrical Engineering minor, and I continue to be fascinated by electronics in my free time.</p>
                </div>
                <div class="collage">
                    <span><div class="sage"></div></span>
                    <span><div class="vr"></div></span>
                    <span><div class="shift"></div></span>
                </div>
                <div class="spacer"></div>
                <p>EnergySage</p>
                <div class="desc-box">
                    <p>Also in high school, around when I started freelancing, I also helped a friend start an engineering club at our school. He took up the role of president, and I took on the role of Education Chair, teaching our members C++ and circuitry for Arduino and simple robotics. These days, I'm pursuing this interest in the form of an Electrical Engineering minor, and I continue to be fascinated by electronics in my free time.</p>
                </div>
                <div class="spacer"></div>
                <p>College <span class="dark-txt">[Junior]</span></p>
                <div class="desc-box">
                    <p>Also in high school, around when I started freelancing, I also helped a friend start an engineering club at our school. He took up the role of president, and I took on the role of Education Chair, teaching our members C++ and circuitry for Arduino and simple robotics. These days, I'm pursuing this interest in the form of an Electrical Engineering minor, and I continue to be fascinated by electronics in my free time.</p>
                </div>
                <div class="spacer"></div>
                <p>Tavus</p>
                <div class="desc-box">
                    <p>Also in high school, around when I started freelancing, I also helped a friend start an engineering club at our school. He took up the role of president, and I took on the role of Education Chair, teaching our members C++ and circuitry for Arduino and simple robotics. These days, I'm pursuing this interest in the form of an Electrical Engineering minor, and I continue to be fascinated by electronics in my free time.</p>
                </div>
                <p>College <span class="dark-txt">[Senior]</span></p>
                <div class="desc-box">
                    <p>Yet to be explored! Looking forward to taking Computer Architecture in the fall, and hoping to take OS in the winter to finish the major on a strong note...</p>
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
                mountedComplete: false,
            };
        },
        async mounted() {
            if (!window.location.hash) {
                window.location.hash = '#2';
            } else {
                const pos = window.location.hash.substring(1);
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
            this.mountedComplete = true;
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
                window.location.hash = pos;
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
        align-items: center;
        justify-content: center;
        flex-direction: column;
        overflow: hidden;
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
        top: 0%;
        width: 600px;
        padding-top: 20vh;
        padding-bottom: calc(80vh);
        z-index: 1;
        background-color: var(--bg-dark);
        padding-left: 30px;
    }
    .exp-cont {
        position: absolute;
        min-width: calc(650px + 50vw);
        height: calc(100vh);
        top: 0vh;
        padding-top: 20vh;
        padding-bottom: 30vh;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        overflow-x: visible;
        overflow-y: scroll;
        padding-right: 25vw;
        padding-left: 25vw;
        scrollbar-width: 0px;
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
    .proj-cont {
        position: absolute;
        min-width: calc(650px + 50vw);
        height: calc(100vh);
        top: 0vh;
        padding-top: 20vh;
        padding-bottom: 30vh;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        overflow-x: visible;
        overflow-y: scroll;
        padding-right: 25vw;
        padding-left: 25vw;
        scrollbar-width: 0px;
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
    .proj-cont::-webkit-scrollbar {
        display: none;
    }
    .intro-box {
        height: 100px;
        display: flex;
        flex-direction: row;
    }
    .intro-text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
    }
    .img-cont {
        z-index: 0;
    }
    .fade-layer {
        height: 100%;
        width: calc(25vw - 45px);
        position: absolute;
        left: 0;
        top: 0;
        display: block;
        background-image: linear-gradient(to right, rgba(20, 20, 20, 0.92) 0%, rgba(20, 20, 20, 1) 95%);
        /* background: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)); */
        z-index: 1;
    }
    .bg-img {
        background-image: url(./assets/standing.png);
        height: 100%;
        width: 25vw;
        position: absolute;
        left: -50px;
        top: 0;
        display: block;
        background-position: 10% 50%;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .headshot {
        height: 100%;
        aspect-ratio: 1/1;
        background-image: url(./assets/headshot.jpg);
        background-repeat: no-repeat;
        background-size: 120% 120%; 
        background-position: 50% 45%;
        border-radius: 100%;
        border: 3px solid var(--acc-one);
        margin-right: 30px;
    }

    .txt-cont h1 {
        font-size: 66px;
        color: var(--acc-one);
        line-height: 66px;
    }
    .proj-cont h1 {
        font-size: 66px;
        color: var(--acc-two);
        line-height: 66px;
    }
    .exp-cont h1 {
        font-size: 66px;
        color: var(--acc-thr);
        line-height: 66px;
    }
    h2 {
        font-size: 25px;
    }
    .txt-cont p {
        margin-top: 30px;
        font-size: 18px;
        width: 100%;
        font-family: "Open Sans", sans-serif;
        letter-spacing: 0.5px;
        font-weight: 300;
    }
    p {
        font-family: "Open Sans", sans-serif;
        letter-spacing: 0.5px;
        font-weight: 300;
        font-size: 14px;
    }
    .proj-cont p {
        margin-top: 10px;
        z-index: 1;
        position: relative;
        font-size: 18px;
        font-family: "Open Sans", sans-serif;
    }
    .exp-cont p {
        font-family: "Open Sans", sans-serif;
        font-size: 18px;
        line-height: 20px;
    }
    .desc-box {
        padding: 15px;
        padding-left: 15px;
        position: relative;
        margin-bottom: 20px;
    }
    .desc-box::before {
        content: '';
        position: absolute;
        left: 0;
        top: 18px; /* Start the border from 25% of the height */
        bottom: 15px; /* End the border at 75% of the height */
        width: 2px; /* Width of the border */
        background-color: var(--acc-thr);; /* Color of the border */
    }
    .desc-box p {
        font-size: 14px;
        color: #AAA;
        font-weight: 200;
        letter-spacing: 0.3px;
    }
    .collage {
        width: 100%;
        min-height: 200px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        margin-bottom: 30px;
        left: -12px;
        position: relative;
    }
    .collage span {
        height: 100%;
        aspect-ratio: 1/1;
        display: block;
        border: 3px solid var(--acc-thr);
        border-radius: 3px;
        position: relative;
    }
    .collage div {
        height: 100%;
        aspect-ratio: 1/1;
        display: block;
        border: 4px solid #141414;
    }
    .collage div::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(20, 20, 20, 0.2);
    }
    .sage {
        background-image: url(./assets/sages.png);
        background-repeat: no-repeat;
        background-size: cover;
    }
    .vr {
        background-image: url(./assets/upnorth.png);
        background-repeat: no-repeat;
        background-size: cover;
    }
    .shift {
        background-image: url(./assets/creators.png);
        background-repeat: no-repeat;
        background-size: cover;
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
        position: relative;
        margin-top: 20px;
        z-index: 3;
        padding-bottom: 30px;
    }
    .colon {
        letter-spacing: -2px;
        font-weight: 500;
    }
    .spacer {
        height: 15px !important;
        width: 100%;
        display: block;
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
        padding-top: 25px;
        padding-bottom: 40px;
        font-size: 16px;
        letter-spacing: 0.3px;
    }
    .quote .acc {
        color: var(--acc-thr);
        font-size: 18px;
        line-height: 30px;
        font-family: "Seymour One", sans-serif;
    }
    .quote .auth {
        color: var(--acc-thr);
        font-size: 16px;
        line-height: 20px;
    }
    .dark-txt {
        color: #555;
        margin-left: 5px;
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