let cachedData: any = null;

export async function fetchData() {

    if (cachedData) {
        return cachedData;
    }

    try {
        const response = await fetch('https://conradswebsite.com/api/country-music-generator');

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        cachedData = data;

        return data;

    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        return { message: 'There was a problem with the fetch operation:', error: error };
    }

}
