const TelegramBot = require("node-telegram-bot-api");
const ExplorerController = require("./controllers/ExplorerController");

const bot = new TelegramBot(process.env.ACCESS_TOKEN, { polling: true });

bot.onText(/\/echo (.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    const resp = match[1];

    bot.sendMessage(chatId, resp);
});

bot.on("message", (msg) => {
    const chatId = msg.chat.id;
    const numberToApplyFb = parseInt(msg.text);

    if (!isNaN(numberToApplyFb)) {
        const fizzbuzzTrick = ExplorerController.getFizzBuzzStatus(numberToApplyFb);
        const responseBot = `Tu número es: ${numberToApplyFb}. Validación: ${fizzbuzzTrick}`;

        bot.sendMessage(chatId, responseBot);
        return;
    }

    bot.sendMessage(chatId, "Envía un número válido");
});
