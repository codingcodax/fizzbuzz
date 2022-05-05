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
    
    if(msg.text === "node" || msg.text === "java") {
        const explorers = ExplorerController.getExplorersByMission(msg.text);
        const explorersNames = explorers.map(explorer => explorer.name);
        
        bot.sendMessage(chatId, explorersNames.join(", "));
        return;
    }
    
    const numberToApplyFb = parseInt(msg.text);

    if (!isNaN(numberToApplyFb)) {
        const responseBot =
      ExplorerController.getFizzBuzzStatusFull(numberToApplyFb);
        console.log(responseBot)

        bot.sendMessage(chatId, responseBot);
        return;
    }

    bot.sendMessage(chatId, "Envía un número válido");
});
