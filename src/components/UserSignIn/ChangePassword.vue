<template>
    <div class="sign-in-form-container">
        <div class="sign-in-form-styling">
            <form @submit.prevent="newSignIn">
                <h2 style="padding: 0.5em; color: rgb(18,18,18);">Change Password</h2>
                <!--
          <div style="display: flex; flex-direction: column;">
            <label for="email" style="align-self: flex-start; padding-left: 0.25em;">Email:</label>
            <input name="email" type="email" placeholder="Email" required v-model="email" autocomplete="email" v-focus>
          </div>
        -->
                <div style="display: flex; flex-direction: column;">
                    <label class="label-title-styling" for="username">Username</label>
                    <input name="username" type="text" placeholder="Username" required v-model="userName"
                        autocomplete="username" v-focus>
                </div>

                <div style="display: flex; flex-direction: column; ">
                    <label class="label-title-styling" for="currentPassword">Current Password</label>
                    <input name="currentPassword" type="password" placeholder="Password" required
                        v-model="currentPassword">
                </div>

                <div style="display: flex; flex-direction: column; ">
                    <label class="label-title-styling" for="newPassword">New Password</label>
                    <input name="newPassword" type="password" placeholder="Password" required v-model="newPassword">
                </div>

                <button @click="changeUserPassword" style="margin-top: 1rem;" class="button-35">
                    Change Password
                </button>

                <div style="margin-top: .5rem; font-size: 1.1rem;">
                    <span style="color: red;">{{ message }}</span>
                </div>

            </form>
        </div>
    </div>
</template>

<script>
/* import axios from 'axios'; */
/* import { signInWithEmailAndPassword } from 'firebase/auth' 
import { auth } from '@/firebase/init.js' */



import UserService from '../../views/projects/UserAccount/user.ts';

// focus directive to the email input
const focus = {
    mounted: (el) => el.focus()
}

export default {
    emits: ["signInSuccessful"], // Declare the SignedIn event here

    directives: {
        focus
    },

    data() {
        return {
            email: '',
            currentPassword: '',
            newPassword: '',
            message: '',
            userName: '',
        }
    },

    methods: {

        async changeUserPassword() {

            const userData = {
                username: this.userName,
                current_password: this.currentPassword,
                new_password: this.newPassword
            };

            try {
                let changePasswordResponse = await UserService.changePassword(userData);
                this.message = changePasswordResponse
                /*
                if (changePasswordResponse) {
                    this.$emit('changePassword', this.userName);
                }*/
            }
            catch (error) {
                console.error('Error:', error);
            }
        },
    }
}

</script>

<style scoped>
.button-35:hover {
    background: rgb(140, 140, 140);
}

input {
    font-size: 1.5rem;
    border-radius: 0.25em;
    border-width: 1px;
    outline: none;
    border: 1px solid rgb(218, 220, 224);
    padding: 0.25em;
}

button {
    width: fit-content;
    margin: auto
}


input {
    margin: 0.1em;
}

input:focus {
    border-color: rgb(17, 255, 180);
}

.sign-in-form-container {
    display: flex;
    justify-content: center;

}

.label-title-styling {
    color: rgb(18, 18, 18);
    font-size: 1.1rem;
    align-self: flex-start;
    padding-left: 0.25em;
    margin-bottom: -.33rem;
}

.sign-in-form-styling {
    padding: 1rem;
    background: rgb(255, 255, 255);
    width: fit-content;
    border-radius: 1em;
    margin-top: 2rem;
    border: 1px solid #cecece;
}
</style>