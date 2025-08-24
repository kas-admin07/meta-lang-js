const { bot } = require('@maxhub/max-bot-api'); // Mocked for tests

// Mock context and isValidUrl for testing
const mockCtx = {
  reply: jest.fn(),
  message: { body: { text: 'https://example.com' } }
};
const isValidUrl = jest.fn().mockReturnValue(true);

// Mock action (e.g., shortenUrl)
const mockAction = jest.fn().mockResolvedValue('Shortened URL');

// Test message handler
describe('js-msg-handler', () => {
  test('should handle valid URL and reply with result', async () => {
    // Code from code.js
    bot.on('message_created', async (ctx) => {
      if (ctx.message.body.text.startsWith('/')) return;
      const url = ctx.message.body.text.match(/(https?:\/\/[^\s]+)/g)?.[0];
      if (url && isValidUrl(url)) {
        const result = await mockAction(url);
        ctx.reply(result);
      }
    });

    await bot.handle(mockCtx, 'message_created');
    expect(isValidUrl).toHaveBeenCalledWith('https://example.com');
    expect(mockAction).toHaveBeenCalledWith('https://example.com');
    expect(mockCtx.reply).toHaveBeenCalledWith('Shortened URL');
  });

  test('should skip commands', async () => {
    mockCtx.message.body.text = '/start';
    await bot.handle(mockCtx, 'message_created');
    expect(mockCtx.reply).not.toHaveBeenCalled();
  });
});
