const axios = require('axios');
jest.mock('axios');

describe('js-shortlink-api', () => {
  test('should shorten URL via API', async () => {
    axios.get.mockResolvedValue({ data: 'https://is.gd/abc123' });
    const result = await shortenUrl('https://example.com');
    expect(axios.get).toHaveBeenCalledWith('{SHORTENER_API}', {
      params: { url: 'https://example.com' },
      timeout: {TIMEOUT}
    });
    expect(result).toBe('https://is.gd/abc123');
  });
});
