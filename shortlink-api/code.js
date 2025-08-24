// [js-shortlink-api]
async function shortenUrl(url) {
    const response = await axios.get('{SHORTENER_API}', {
        params: { url },
        timeout: {TIMEOUT}
    });
    return response.data.trim();
}
