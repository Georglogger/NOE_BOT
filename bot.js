require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');

// Bot-Client erstellen mit den nötigen Intents
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

// Event wenn der Bot bereit ist
client.once('ready', () => {
    console.log(`Bot ist eingeloggt als ${client.user.tag}!`);
});

// Event für neue Nachrichten
client.on('messageCreate', async (message) => {
    // Ignoriere Nachrichten vom Bot selbst
    if (message.author.bot) return;

    // Prüfe ob die Nachricht "Nö" enthält (Groß-/Kleinschreibung egal)
    if (message.content.toLowerCase().includes('nö')) {
        // Antworte mit "Nö"
        message.channel.send('Nö');
        return;
    }

    // Prüfe ob JEDES Wort mindestens ein "C" oder "c" enthält
    const words = message.content.trim().split(/\s+/); // Teile Nachricht in Wörter

    if (words.length > 0) {
        // Prüfe ob alle Wörter mindestens ein C enthalten
        const allWordsHaveC = words.every(word =>
            word.toLowerCase().includes('c')
        );

        if (allWordsHaveC) {
            message.channel.send('Nö');
        }
    }
});

// Bot mit Token anmelden
client.login(process.env.DISCORD_TOKEN);
