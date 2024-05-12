// src/axiosInstance.js
import axios from 'axios';

//const BASE_URL = '/backend/api';

const instance = axios.create({
    withCredentials: true,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    },

});

// Function to get CSRF token from cookies
function getCsrfToken() {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith('csrf_access_token=')) {
            return cookie.substring('csrf_access_token='.length, cookie.length);
        }
        if (cookie.startsWith('csrf_refresh_token=')) {
            return cookie.substring('csrf_refresh_token='.length, cookie.length);
        }
    }
    return null;
}

// Add a request interceptor to include the CSRF token in every request
instance.interceptors.request.use(config => {
    const csrfToken = getCsrfToken();
    if (csrfToken) {
        config.headers['X-CSRF-TOKEN'] = csrfToken;
    }
    return config;
});

// Add a response interceptor
instance.interceptors.response.use(undefined, async error => {
    if (error.config && error.response && error.response.status === 401) {
        // Refresh token has expired, try to refresh it
        try {
            const csrfToken = getCsrfToken();
            await instance.post('/backend/api/refresh', {}, {
                headers: {
                    'X-CSRF-TOKEN': csrfToken
                }
            });
            // Retry the original request
            return instance.request(error.config);
        } catch (refreshError) {
            console.error('Error refreshing token:', refreshError);
            throw refreshError;
        }
    }

    throw error;
});

export default instance;