<template>
    <div class="cloud-animation">
       <!-- generate clouds -->
        <!--
        <button class="button-35 hide-button-low-resolution"
          style="background-color: rgba(255, 255, 255, 0); float: right; margin-right: 1em; margin-top: 1em; z-index: 3; color: #fff; opacity: 1;"
          @click="toggleClouds"><span v-if='moveTheClouds'>Stop</span><span v-else>Move</span>&nbsp;Clouds</button>

        <div id="cloudOne" style="position: absolute; margin-left: 2em; margin-top: 3em; opacity: 0.8;">
          <div style="margin-left: 3em; position: absolute;" class="cloud"></div>
          <div style="float: right; margin-right: 2em; position: absolute;" class="cloud"></div>
          <div style="float: right; margin-left: 1em; margin-top: 1em; position: absolute;" class="cloud"></div>
        </div>

        <div id="cloudTwo" style="position: absolute; margin-left: 9em; margin-top: 5em; opacity: 0.8;">
          <div style="margin-left: 3em; position: absolute;" class="cloud"></div>
          <div style="float: right; margin-right: 2em; position: absolute;" class="cloud"></div>
          <div style="float: right; margin-left: 1em; margin-top: 1em; position: absolute;" class="cloud"></div>
        </div>

        <div id="cloudThree">
          <div style="margin-left: 3em; position: absolute;" class="cloud"></div>
          <div style="float: right; margin-right: 2em; position: absolute;" class="cloud"></div>
          <div style="transform: rotateY(150deg); float: right; margin-left: 1em; margin-top: 1em; position: absolute;"
            class="cloud"></div>
        </div>
      -->
    </div>
  </template>
  
  <script>
  export default {
    name: 'CloudAnimation',
    // Your component options here
    data() {
      return {
        //########## This logic only does cloud animations - not used anymore.
        moveTheClouds: false,
        i1: null,
        i2: null,
        i3: null,
        clouds: [],
        coordX: [15, 9, 2],
      //######### End cloud animations area.
      }
    },
    methods:{
        toggleClouds() {
        if (this.moveTheClouds === false) {
            this.moveClouds();
        }

        if (this.moveTheClouds === true) {
            this.stopClouds();
        }
        this.moveTheClouds = !this.moveTheClouds;
        },
        moveClouds() {

        const cloudOne = document.getElementById("cloudOne");
        let marginLeftCloudOne = this.coordX[0]

        const cloudTwo = document.getElementById("cloudTwo");
        let cloudTwoMargin = this.coordX[1]

        const cloudThree = document.getElementById("cloudThree");
        let marginLeft = this.coordX[2]

        if (window.innerWidth >= 800) {

            this.i1 = setInterval(() => {
            marginLeftCloudOne += 0.02;
            this.coordX[0] = marginLeftCloudOne;
            cloudOne.style.marginLeft = `${marginLeft}em`;
            if (marginLeft > 90) {
                marginLeft = -22;
            }
            }, 33);

            this.i2 = setInterval(() => {
            cloudTwoMargin += 0.03;
            this.coordX[1] = cloudTwoMargin;
            cloudTwo.style.marginLeft = `${cloudTwoMargin}em`;
            if (cloudTwoMargin > 90) {
                cloudTwoMargin = -22;
            }
            }, 33);

            this.i3 = setInterval(() => {
            marginLeft += 0.03;
            this.coordX[2] = marginLeft;
            cloudThree.style.marginLeft = `${marginLeftCloudOne}em`;
            if (marginLeftCloudOne > 90) {
                marginLeftCloudOne = -22;
            }
            }, 33);

            this.clouds.push(this.i1, this.i2, this.i3);
        }
        },
        stopClouds() {
        for (const cloudId of this.clouds) {
            clearInterval(cloudId);
        }
        },
        }
  }
  </script>
  
  <style scoped>

  /* Make some happy clouds
- these are old designs, but I removed them for now to make site look more professional and formal. */
.cloud {
  width: 200px;
  height: 50px;
  background: #ececec;
  border-radius: 100px;
  position: relative;
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.1), 0 30px 50px rgba(0, 0, 0, 0.1);
}

.cloud::before,
.cloud::after {
  content: "";
  position: absolute;
  background-color: #ffffff;
  border-radius: 100%;
}

.cloud::before {
  width: 100px;
  height: 70px;
  top: -20px;
  left: 20px;
}

.cloud::after {
  width: 100px;
  height: 70px;
  top: -30px;
  right: 20px;
}

#cloudThree {
  position: absolute;
  margin-left: 15em;
  margin-top: 9.5em;
  opacity: 0.9;
  z-index: 0;
}

@media only screen and (max-width: 50rem) {
  

  #cloudThree {
    position: absolute;
    margin-left: 0em;
    margin-top: 9.5em;
    opacity: 0.9;
    z-index: 0;
  }
}

  
  </style>