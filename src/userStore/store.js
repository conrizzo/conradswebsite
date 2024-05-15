// userStore.js
import { defineStore } from 'pinia';

export const useUserStore = defineStore({
    id: 'user',
    state: () => ({
        isUserLoggedIn: false,
        userName: null,
    }),
    actions: {
        loginSuccess(userName) {
            this.isUserLoggedIn = true;
            this.userName = userName;
            localStorage.setItem('user', JSON.stringify({ isUserLoggedIn: true, userName }));
        },
        logout() {
            this.isUserLoggedIn = false;
            this.userName = null;
            localStorage.removeItem('user');
        },
        initializeStore() {
            const user = JSON.parse(localStorage.getItem('user'));
            if (user) {
                this.isUserLoggedIn = user.isUserLoggedIn;
                this.userName = user.userName;
            }
        },
    },
});