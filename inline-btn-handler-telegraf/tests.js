const { addInlineButtonHandler } = require('./code');

// Mock context for testing
const mockCtx = {
  answerCbQuery: jest.fn().mockResolvedValue(),
  editMessageText: jest.fn().mockResolvedValue(),
};

// Jest test
describe('js-inline-btn-handler', () => {
  test('should call answerCbQuery and editMessageText', async () => {
    // Mock Telegraf bot
    const bot = { action: jest.fn((data, cb) => cb(mockCtx)) };

    addInlineButtonHandler(bot, 'test_data', 'Clicked!');
    expect(bot.action).toHaveBeenCalledWith('test_data', expect.any(Function));
    expect(mockCtx.answerCbQuery).toHaveBeenCalled();
    expect(mockCtx.editMessageText).toHaveBeenCalledWith('Clicked!');
  });
});
