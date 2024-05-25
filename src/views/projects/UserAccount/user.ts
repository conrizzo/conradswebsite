import axiosInstance from '@/axios';
import { useUserStore } from '@/userStore/store.js';
import router from '@/router';

const userStore = useUserStore();
userStore.initializeStore();

interface AccountData {
    data: string | number;
    createdAt: string;
}

class UserService {

    /*
    Class to handle user account actions such as signing in, signing out, and getting account data.
    */


    /*
    @param data: string
    */

    async postAccountData(data: string): Promise<void | boolean> {
        try {
            await axiosInstance.post('/backend/api/account_data', { data });
            // update the data displayed after the post request finishes
            return true;
        } catch (error: any) {

            if (error.response && error.response.status === 429) {
                console.log("Too many requests, please try again later.");
            }
            console.log(error)

            setTimeout(() => {
                userStore.isUserSignedIn = false;
                userStore.userName = null;
                userStore.signOut();
                router.push('/UserSignIn');
            }, 1500);
        }
    }


    /*
    @param AccountData[] 
    array of objects with data (the message to get) and createdAt (time made) properties
    */

    async getAccountData(): Promise<AccountData[]> {
        try {
            const response = await axiosInstance.get('/backend/api/account_data');
            return response.data.account_data.map((item: any) => ({
                data: item.data,
                createdAt: item.created_at,
            }));
        }
        catch (error: any) {
            if (error.response && error.response.status === 429) {
                return [
                    {
                        data: "Too many requests, wait 10 seconds and try again.",
                        createdAt: new Date().toISOString(),
                    }
                ];
            }

            /*
            setTimeout(() => {
            this.userStore.isUserSignedIn = false;
            this.userStore.userName = '';
            this.userStore.signOut();
            this.$router.push('/UserSignIn');
            }, 1500);
            */
            console.log(error);
        }
        return []; // returns empty array if some error happens
    }


    /*
    @param select_item: number\
    select_item is the id of the item to delete from PostgreSQL database
    */

    async deleteAccountData(select_item: number): Promise<void | string> {

        if (!Number.isInteger(select_item)) {
            throw new Error("Invalid input: select_item is not an integer");
        }
        try {
            await axiosInstance.delete(`/backend/api/account_data/${select_item}`);
            console.log("Deleted item with id: ", select_item);
        }
        catch (error: any) {
            if (error.response && error.response.status === 429) {
                console.log("Too many requests, please try again later.");
                return "429";
            }
            console.log("other delete entry error:", error);
        }
    }


    /*
    Sign out the user
    */

    async signOut() {
        try {
            await axiosInstance.post('/backend/api/sign_out', {}, { withCredentials: true });

            if (axiosInstance.defaults.headers.common['Authorization']) {
                delete axiosInstance.defaults.headers.common['Authorization'];
            }
            userStore.signOut();
            router.push('/UserSignIn');
            console.log("User logged out");
        } catch (error) {
            console.error('Error logging out:', error);
        }
    }


    /*
    Sign in the user
    @param userData: { email: string, password: string }
    */

    async signIn(userData: { email: string, password: string }) {
        console.log('Signing in...')
        try {
            const response = await axiosInstance.post('/backend/api/sign_in', userData, { withCredentials: true });
            console.log("response data message:", response.data.message);               
            return true;
        } catch (error: any) {
            console.log('Error signing in:', error);
        }
    }




}
export default new UserService();