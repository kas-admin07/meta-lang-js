// [js-inline-btn-handler]
/**
 * Adds an inline button handler for Telegraf bots.
 * @param {Telegraf} bot - Telegraf bot instance
 * @param {string} callbackData - callback_data to match
 * @param {string} responseText - reply text
 */
function addInlineButtonHandler(bot, callbackData, responseText) {
  bot.action(callbackData, async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.editMessageText(responseText);
  });
}

module.exports = { addInlineButtonHandler };
