const { bot } = require('@maxhub/max-bot-api'); // Mocked for tests

// Mock context for testing
const mockCtx = {
  reply: jest.fn(),
  message: { body: { text: '/start' } }
};

// Test command handler
describe('js-cmd-handler', () => {
  test('should handle command with correct response', () => {
    // Code from code.js
    bot.command('start', (ctx) => {
      ctx.reply('Welcome!');
    });

    bot.handle(mockCtx, 'start');
    expect(mockCtx.reply).toHaveBeenCalledWith('Welcome!');
  });
});
