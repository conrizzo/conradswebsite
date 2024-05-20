// userStore.js
import { defineStore } from 'pinia';

export const useUserStore = defineStore({
    id: 'user',
    state: () => ({
        isUserSignedIn: false,
        userName: null,
    }),
    actions: {
        signInSuccess(userName) {
            this.isUserSignedIn = true;
            this.userName = userName;
            localStorage.setItem('user', JSON.stringify({ isUserSignedIn: true, userName }));
        },
        signOut() {
            this.isUserSignedIn = false;
            this.userName = null;
            localStorage.removeItem('user');
        },
        initializeStore() {
            /*
            const user = localStorage.getItem('user');
            if (user) {
                this.isUserSignedIn = user.isUserSignedIn;
                this.userName = user;
            }
           */
            const user = JSON.parse(localStorage.getItem('user'));
            if (user) {
                this.isUserSignedIn = user.isUserSignedIn;
                this.userName = user.userName;
            }

        },
    },
});