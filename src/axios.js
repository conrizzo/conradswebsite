// src/axiosInstance.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://conradswebsite.com/',
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true,
});

const refreshInstance = axios.create({
  baseURL: 'https://conradswebsite.com/',
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true,
});

// splits list of cookies and gets each one by name to see if it matches a cookie name input
function getCookieValue(name) {
  const match = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
  return match ? match[2] : null;
}

function getCsrfAccessToken() {
  return getCookieValue('csrf_access_token');
}

function getCsrfRefreshToken() {
  return getCookieValue('csrf_refresh_token');
}

instance.interceptors.request.use(config => {
  let csrfToken = getCsrfAccessToken(); // Default to CSRF access token

  if (config.url === '/backend/api/refresh') {
    csrfToken = getCsrfRefreshToken(); // Use CSRF refresh token for refresh route
  }

  if (csrfToken) {
    config.headers['X-CSRF-TOKEN'] = csrfToken;
  }

  return config;
});

instance.interceptors.response.use(undefined, async error => {
  if (error.config && error.response && error.response.status === 401) {
    // If 401 by expired access cookie, we do a refresh request
    try {
      const res = await refreshInstance.post('/backend/api/refresh', {}, {
        headers: {
          'X-CSRF-TOKEN': getCsrfRefreshToken()
        }
      });

      // Set cookies to the new tokens
      const newAccessToken = res.headers['csrf_access_token'];
      const newRefreshToken = res.headers['csrf_refresh_token'];
      if (newAccessToken) {
        document.cookie = `csrf_access_token=${newAccessToken}; path=/`;
      }
      if (newRefreshToken) {
        document.cookie = `csrf_refresh_token=${newRefreshToken}; path=/`;
      }

      // New request with new token
      const config = error.config;
      config.headers['X-CSRF-TOKEN'] = newAccessToken || getCsrfAccessToken();

      return new Promise((resolve, reject) => {
        instance.request(config).then(response => {
          resolve(response);
        }).catch((error) => {
          reject(error);
        })
      });

    } catch (error) {
      console.log("server answer: ", error.response.data);
      return Promise.reject(error);
    }
  }

  return Promise.reject(error);
});

export default instance;