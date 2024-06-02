import axiosInstance from '@/axios';
import axiosRetry from 'axios-retry';
import { useUserStore } from '@/userStore/store.js';
import router from '@/router';

// May not be neccessary to initialize the store here
const userStore = useUserStore();
userStore.initializeStore();

// Set retry requests to 2 times
axiosRetry(axiosInstance, { retries: 1 });

// Post or Get the data as a string or number, with a string date
interface AccountData {
    data: string | number;
    createdAt: string;
}

/*
    Class to handle user account actions such as signing in, 
    signing out, getting account data, changing password, accessing admin area, etc
*/
class UserService {
    /*
    @param data: string
    returns true with message "Data posted successfully." if the data was posted successfully,
    returns false with message "An error occurred." if an error occurred.
    */
    async postAccountData(data: string): Promise<{ success: boolean, message: string }> {
        try {
            const response = await axiosInstance.post('/backend/api/account_data', { data });
            return { success: true, message: response.data.message };
        }
        catch (error: any) {
            let errorMessage = "An error occurred. Please try again later.";

            if (error.response && error.response.status === 429) {
                errorMessage = "Too many requests, please try again later.";
                return { success: false, message: errorMessage };
            }

            // as set of something else went wrong it should log the user out
            setTimeout(() => {
                userStore.signOut();
                router.push('/UserSignIn');
            }, 1500);
            return { success: false, message: errorMessage };
        }
    }


    /*
    @param AccountData[] 
    array of objects with data (the message to get) and createdAt (time made) properties
    */
    async getAccountData(): Promise<AccountData[]> {


        const errorMessageObjectToReturn =
            [
                {
                    data: "Too many requests, wait 10 seconds and try again.",
                    createdAt: new Date().toISOString(),
                    error: true                   
                }
            ]


        /* Return the account data from the PostgreSQL database */
        try {
            const response = await axiosInstance.get('/backend/api/account_data');
            return response.data.account_data.map((item: any) => ({
                data: item.data,
                createdAt: item.created_at,
            }));
        }
        catch (error: any) {

            if (error.response) {

                if (error.response.status === 429) {
                    return errorMessageObjectToReturn;
                }

                else if (error.response.status === 401) {
                    errorMessageObjectToReturn[0].data = "User is not authenticated";
                    //console.log("User is not authenticated");
                    setTimeout(() => {

                        userStore.signOut();
                        router.push('/UserSignIn');
                    }, 1000);
                }
                else {
                    errorMessageObjectToReturn[0].data = "Some other error occured!" + error;
                    //console.log("Some other error occured! ", error);
                }
            }
            else {
                errorMessageObjectToReturn[0].data = "Not connected to the internet!";
            }
        }

        return errorMessageObjectToReturn;
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
        }
        catch (error) {
            console.error('Error logging out:', error);
        }
    }


    /*
    Sign in the user
    @param userData: { email: string, password: string }
    */
    async signIn(userData: { username: string, password: string }) {
        console.log('Signing in...')
        try {
            const response = await axiosInstance.post('/backend/api/sign_in', userData, { withCredentials: true });
            console.log("response data message:", response.data.message);
            return true;
        }
        catch (error: any) {
            console.log('Error signing in:', error);
        }
    }

    async specialAreaAccess() {
        try {
            const response = await axiosInstance.get('/backend/api/special_area');

            return response.data;
        }
        catch (error: any) {
            console.log('Error getting special user data:', error);
        }

    }

    /* Change the password 
    @param userData: { username: string, current_password: string, new_password: string }
    */
    async changePassword(userData: { username: string, current_password: string, new_password: string }) {

        let responseValue = null;

        try {
            const response = await axiosInstance.post('/backend/api/change_password', userData, { withCredentials: true });
            responseValue = response.data.message;
            return responseValue
        } catch (error: any) {
            responseValue = "Password change failed, invalid username or password."
        }

        return responseValue;
    }

}
export default new UserService();