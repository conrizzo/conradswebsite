

<template>
  <div class="container background-color-about-page">
    <!-- Main area -->

    <div>

      <div style="margin-top: 2em;">
        <h1 style="font-size: 2em;"><router-link style="color: rgb(0, 255, 119)" class="text-links-no-underline"
            :to="'/projects/cowculator'"></router-link></h1>
      </div>

      <router-link class="text-links-no-underline" :to="'/projects/cowculator'">
        <img class="cow-image" :src="cowculatorUserInterface" alt="Cowculator Picture" />
      </router-link>

      <p class="paragraph-text break-text" style="padding-top: 2em;">Rough draft below - have been updating code in this to make it more professional and reviewing everything.</p>

      <p class="paragraph-text break-text" style="padding-top: 2em;">The cowculator is a fully functional calculator! The cowculator has been a project for fun/practice. It uses actual parsing, not the JavaScript eval() function
        which is considered insecure and bad practice to use!
        Building it had some challenges, and when undertaking a project like this one has
        to remember how much fine-tuning is involved. One challenge was implementing the parenthesis functionality. This
        was a step by step process thinking
        about which symbol came before or after another symbol. Some neat features were added into it, such as the ability
        to use the keyboard to type in the numbers, and
        having the numbers highlight the calculator numbers as they are typed, and also highlight them as the numbers are
        removed using the &larr; back arrow.
      </p>

      <p class="paragraph-text break-text">
        The user can type in things like (2)(2) and this will automatically convert to (2)×(2).
        Typing in something incorrect like 2-+2 will also automatically convert to 2+2 and prioritize the last math
        operator entered.
        Some of these functions are pre-processed with the watcher as the user types and are not done in the cowculate()
        function itself!
        The copy answer to clipboard function doesn't copy anything until a result is actually evaluated, but will work
        for all mathmatical operations such as 2Moo*3Moo*2Moo etc.
        The cowculator also supports exponents and their use with parenthesis. The user can type in 2^2, 2+2^2*2, or
        2(2)^3 and it will be evaluated correctly.
      </p>

      <p class="paragraph-text break-text">
        Adding in the x^y power function was a challenge. The interesting part of how it computes powers is that for an
        expression
        like 2(3)^2^2 it will use the code:
        <pre v-bind:class="'language-JavaScript line-numbers'" class="code-format">
    <code>
        addParenthesisAroundPowerSymbol(input) {
          // Use regular expression to match number^number pattern
          const regex = /(\(\d+\)(?:\^\d+)*|\d+(?:\^\d+)+)/g;
          let output = input.replace(regex, '($1)');
          // for now this fixes it, but it's not the best solution, forces multiplication symbol between parenthesis to fix mult error
          let addMultParenthesis = output.replace(/\)\(/g, ')*(');

          return addMultParenthesis;
        },
      </code>
        </pre>
        This will add parenthesis
        2((3)^2^2) so powers get evaluated
        correctly. The multiplication symbol and power symbol in this parsing code both have the same precedence so adding in the paranthesis
        is a quick fix to force the code to first evaluate all exponents before multiplication. As the user, you don't
        see these additional parenthesis, but they are there in the code.
      </p>

      <div style="padding-top: 1em;" class="figure-stuff">
        <div>
          <figure>
            <img :src="imagePath" alt="Binary Tree example" />
            <figcaption><b>A</b>) Binary Tree example showing how the cowculator code computes. The left tree result is
              14, the right
              tree is -19, and an expression with parenthesis is shown.
              As shown, the binary tree evaluates each node starting from the bottom. Diagram made using: <a
                href="https://vanya.jp.net/vtree/">https://vanya.jp.net/vtree/</a>.

            </figcaption>
          </figure>
          <figure>
            <img :src="imagePathTwo" alt="Binary Tree example 2" />
            <figcaption><b>B</b>) Binary Tree example of the left-most example from figure A: <b>5*4-6=14</b>, this comes
              directly from the cowculator output!

            </figcaption>
          </figure>
        </div>
      </div>
      <div>
        <h4 class="sub-section-titles">Code that does the cowculations:</h4>

        <p class="top-most-paragraph-space paragraph-text break-text">
          Here is the actual JavaScript code for the cowculator calculations themselves. It is a bit long, but it is a
          cowculator after all!
        </p>
      </div>
      <CowculatorCode></CowculatorCode>
    </div>

    <!-- Aside area -->

    <AsideContent class="aside-padding">
      <template v-slot:aside-content>

        <p class="aside-text"></p>


      </template>
    </AsideContent>

    <!-- testing features START -->
    <div>
      <p class="paragraph-text break-text top-most-paragraph-space"> Testing some other features in vue 3 on this page,
        page not finished! This button is using a class binding to change the color of the text.
        <a
          href="https://vuejs.org/guide/essentials/class-and-style.html">https://vuejs.org/guide/essentials/class-and-style.html</a>
        and was using Composition API setup
        <a class="text-links" href="https://vuejs.org/api/composition-api-setup.html">
          https://vuejs.org/api/composition-api-setup.html</a> but is now using options API with computed class
        binding to enlarge the text and change the color.
      </p>
      <div :class="classObject">
        <!--{{ toiletPaperMessage }} -->
        <span v-html="cowMessage"></span>
      </div>
      <button style="margin-top: 2em; margin-bottom: 0.5em;" class="button-35" @click="setError()">Feed cows!</button>


    </div>
  </div>
  <!-- testing features END -->

  <div class="push-footer-low-res">
    <!-- Force the footer to the bottom of this page, can make this a better fix later!!!!!! -->
  </div>
</template>
  
<script>

import CowculatorCode from "@/components/ProjectDescriptions/ProjectText/CowculatorCode.vue";
import AsideContent from "@/components/FirstAside.vue";


//import { ref, computed } from 'vue';
export default {


  name: "CowculatorDescription",
  components: {
    AsideContent, CowculatorCode,

  },
  data() {
    return {
      isActive: true,
      error: null,
      isButtonClicked: false,
      goodCowMessage: "The cows are fed, they are now happily mooing! <br> You saved the day!",
      badCowMessage: "Red Alert: <br> The cows are mooing disgruntledly! <br> Heroically save them by pressing the Feed cows button!",
      imagePath: require("@/images/binary_tree.jpg"),
      imagePathTwo: require("@/images/binary_tree_two.jpg"),
      cowculatorUserInterface: require("@/images/cowculator_design_picture.jpg"),


    };
  },
  computed: {
    classObject() {
      return {
        active: this.isActive && !this.error,
        'text-danger': this.error && this.error.type === 'fatal'
      };
    },
    cowMessage() {
      return this.isButtonClicked ? this.goodCowMessage : this.badCowMessage;
    }
  },
  methods: {
    setError() {
      this.error = {
        type: 'fatal'
      };
      this.isButtonClicked = true;
    }
  }
};
</script>
  
<style scoped>
h4 {
  padding-left: 0em;
  font-size: 2em;
}

.background-color-about-page {
  background-color: #ffffff;
}

.paragraph-text {
  margin-left: 10em;
  margin-right: 10em;
  line-height: 1.65em;
  font-size: 1em;
  text-align: left;
  word-break: break-word;
  font-weight: 400;
  margin-bottom: 1em;
}

/* figure stuff */
.figure-stuff {
  margin: 0em 0em 0em 0em;
  text-align: center;
}

.figure-stuff>div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.figure-stuff figure {
  margin: 0em 0em auto;
  width: 48.5%;
}

.figure-stuff img {
  width: 100%;
  height: auto;
  max-width: 98%;
  display: block;
  margin: 0 auto;
}

/* image and figures */
figure {
  height: 400px;
  display: flex;
  flex-flow: column;
  padding: 0.5em;
  padding-bottom: 0em;
  margin-left: auto;
  margin-right: auto;
  font-size: 1em;
  font-weight: 75;
  text-align: left;
  color: rgb(0, 0, 0);
  background-color: #ffffff;
  border-radius: 5px;
  line-height: 1.2em;
}

figcaption {
  padding: 0.5em;
}

img {
  max-width: 500px;
  max-height: auto;
}

.sub-section-titles {
  margin-left: 5em;
  margin-top: 1em;
  text-align: left;
}

.static {
  color: blue;
}

.active {
  color: rgb(255, 0, 0);
  font-size: 1em;
  margin-right: 2em;
  margin-left: 2em;
}

.text-danger {
  color: rgb(90, 255, 104);
  font-size: 1em;
}

.aside-padding {
  padding: 1em;
}


/* Adjust the padding for mobile resolution for this block */
@media only screen and (max-width: 1600px) {

  .cow-image {
    width: 300px;
  }

  .sub-section-titles {
    margin-left: 3em;
    font-size: 1em;
  }

  .code-format {
    margin-left: 2em;
    font-size: 1em;
    margin-right: 2em;
  }

  .figure-stuff {
    margin: 0em 0em 0em 0em;
  }

  figure {
    margin-left: 1em;
    margin-right: 1em;
    height: auto;
  }

  .figure-stuff>div {
    flex-direction: column;
  }

  .figure-stuff figure {
    margin-top: 0.5em;
    width: auto;
  }

  .paragraph-text {
    margin-left: 3em;
    margin-right: 3em;
  }
}
</style>