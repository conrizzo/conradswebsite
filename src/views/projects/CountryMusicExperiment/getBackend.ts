

export async function postDataAndGetResponse(url: string, songLabels: string[], songSentiment: string[]) {

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({labels: songLabels, sentimentLabels: songSentiment})
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const jsonData = await response.json();
        return jsonData;
    } catch (error) {
        console.error('Error:', error);
    }
}