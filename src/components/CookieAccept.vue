<template>
    <!-- click.self means only this item will activate this function-->
    <div class="backdrop" v-if="showModal">
        <div class="cookie-modal">
            <button class="close" @click="acceptCookies"></button>


            <h2>Privacy Policy</h2>
           

            <p class="text">By
                using this site you agree to the use of essential <a class="text-links"
                    href="https://en.wikipedia.org/wiki/HTTP_cookie">cookies</a>
                stored locally in the browser for website functionality.
                This site optionally (with a user made account) connects to <a class="text-links"
                    href=https://firebase.google.com>Firebase</a> for
                user authentication and backend database storage. Other than Firebase, no other data is transmitted to 3rd
                party websites or services. The only cookies used are those essential for the site to function. By clicking "Accept" or closing
                this modal, you agree to these terms.
            </p>
            <br>
            <p class="text"><span style="color: #ff5959;">Also:</span> This site is being developed and currently is hosted using <a class="text-links"
                    href="https://pages.github.com/">GitHub Pages</a>. In case the site is not loading or certain features do not work, the code on this site is targeted toward modern web
                browsers, and the solution may be to update your browser to the newest version!</p>

            <!-- Can link to a longer privacy page in the future: There are few websites with advanced features that do not need to reference or store some
                basic form of data locally on the client side as cookies. This website itself does not store any personally
                identifiable information.  If you do not agree to minimal essential cookies, please do not use this website. -->
            <button class='button-35' @click="acceptCookies">Accept</button>
        </div>
    </div>
</template>
  
<script>

// check to see if this makes the css load faster.
import "@/assets/globalCSS.css";

export default {
    data() {
        return {
            showModal: true
        };
    },

    methods: {
        closeModal() {
            this.$emit("close");
        },
        acceptCookies() {
            this.showModal = false;
            localStorage.setItem('cookiesAccepted', 'true');
        }
    },
    mounted() {
        const cookiesAccepted = localStorage.getItem('cookiesAccepted');
        if (cookiesAccepted === 'true') {
            this.showModal = false;
        }
    }
};

</script>
  
  
  <!-- scoped applies to only this component -->
<style scoped>
h1 {
    color: rgb(105, 105, 198);
    border: none;
    padding: 0;
}

.cookie-modal {
    width: 80%;
    max-width: 50em;
    padding-top: 0.75em;
    padding-bottom: 1em;
    padding-left: 25px;
    padding-right: 25px;

    background: rgb(255, 255, 255);
    border-radius: 10px;
    position: absolute;
    bottom: 25%;
    left: 50%;
    transform: translateX(-50%);
}

.button-35 {
    margin-top: 0.5em;
    background-color: #42b883;
    color: #fff;
}

.button-35:hover {
    box-shadow: none;
    background-color: #57c996;
}

.backdrop {
    top: 0;
    position: fixed;
    background: rgba(0, 0, 0, 0.2);
    width: 100%;
    height: 100%;
    /* bring this in front of all other elements */
    z-index: 1000;
}



h2 {
    color: #42b883;
    margin-bottom: 0.5em;
}

.text {
    text-align: left;
}

/* CSS FOR MODAL "X" Close button*/
.close {
    position: absolute;
    top: 0em;
    right: 0em;
    cursor: pointer;
    width: 15px;
    height: 15px;

    border: none;
    width: 40px;
    height: 40px;
    background-color: #42b883;
    border-top-right-radius: 10px;
    /* matches the modal top right corner */
    border-bottom-left-radius: 10px;
    /* matches the modal top right corner */
}

.close:hover {
    background-color: #ff5959;
}

.close:before,
.close:after {
    position: absolute;
    left: 15px;
    content: " ";
    height: 28px;
    width: 2px;
    background-color: #000000;
    top: 0.5em;
    left: 1.4em;
}

.close:before {
    transform: rotate(45deg);
}

.close:after {
    transform: rotate(-45deg);
}

li+li {
    margin-top: 0.5em;
}

@media only screen and (max-width: 600px) {
    h2 {
        font-size: 1.1em;
    }
}</style>