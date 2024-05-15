/*

import axiosInstance from '@/axios';


let refreshIntervalId = null;

export function startTokenRefresh() {

    if (refreshIntervalId) {
        clearInterval(refreshIntervalId);
    }

    refreshIntervalId = setInterval(async () => {
        try {
    
            const response = await axiosInstance.post('/backend/api/refresh', {},

            );
            console.log("refreshing response", response);

        } catch (refreshError) {
            console.error('Error refreshing token:', refreshError);
            if (refreshError.response) {
                console.error('Response data:', refreshError.response.data);
                console.error('Response status:', refreshError.response.status);
                console.error('Response headers:', refreshError.response.headers);
            }
        }
    }, 60000); // Refresh every 60 seconds
}
export function stopTokenRefresh() {
    if (refreshIntervalId) {
        clearInterval(refreshIntervalId);
        refreshIntervalId = null;
    }
}


*/