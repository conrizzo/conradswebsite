<template>
    <!-- click.self means only this item will activate this function-->
    <div class="backdrop" v-if="showModal">
        <div class="cookie-modal">
            <button class="close"></button>


            <h2>Privacy Policy</h2>
            <p class="text">This site is being developed and currently is hosted on <a class="text-links" href="https://pages.github.com/">GitHub Pages</a>, by using this site you agree to the use of basic cookies
                stored locally for functionality.
                The site optionally connects to <a class="text-links" href=https://firebase.google.com>Firebase</a> for
                user authentication and database storage.
                No data is transmitted to 3rd party websites.
                The only cookies used are those necessary for the site to function. They do not store any personally
                identifiable information other than those stored by Github pages.
            </p>
            <button style="margin-top: 0.5em; background-color: #42b883; color: #fff;" class='button-35' @click="acceptCookies">Accept</button>
        </div>
    </div>
</template>
  
<script>
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
    max-width: 800px;
    padding-top: 0.75em;
    padding-bottom: 1em;
    padding-left: 25px;
    padding-right: 25px;

    background: rgb(255, 255, 255);
    border-radius: 10px;
    position: absolute;
    bottom: 1em;
    left: 50%;
    transform: translateX(-50%);
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