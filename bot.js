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

    // Status setzen
    client.user.setPresence({
        activities: [{ name: 'Du kannst etwas gewinnen! 👀' }],
        status: 'online',
    });
});

// Event für neue Nachrichten
client.on('messageCreate', async (message) => {
    // Ignoriere Nachrichten vom Bot selbst
    if (message.author.bot) return;

    // Prüfe ob die Nachricht "Nö" enthält (Groß-/Kleinschreibung egal)
    if (message.content.toLowerCase().includes('nö')) {
        // Antworte mit "Nö" und erwähne die Person
        message.channel.send(`${message.author} Nö`);
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
            message.channel.send(`${message.author} Nö`);
        }
    }

    // RNG Duplo Gewinnspiel - 1 zu 1000 Chance
    const random1 = Math.floor(Math.random() * 1000) + 1;
    const random2 = Math.floor(Math.random() * 1000) + 1;

    if (random1 === random2) {
        message.channel.send(`${message.author} <@YOUR_DISCORD_NAME_HERE> WOW DU HAST EINE WAHRSCHEINLICHKEIT VON 1 ZU 1000 GEWONNEN! DU KRIEGST NEN DUPLO :D`);
    }
});

// Bot mit Token anmelden
client.login(process.env.DISCORD_TOKEN);
