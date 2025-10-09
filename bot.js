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

// Bot-ID vom Doch Bot (damit dieser Bot ihn ignoriert)
const DOCH_BOT_ID = 'DOCH_BOT_ID_HIER_EINTRAGEN';

// Event wenn der Bot bereit ist
client.once('ready', () => {
    console.log(`Bot ist eingeloggt als ${client.user.tag}!`);

    // Status setzen
    client.user.setPresence({
        activities: [{ name: 'Wer wird es nur sein?' }],
        status: 'online',
    });
});

// Event für neue Nachrichten
client.on('messageCreate', async (message) => {
    // Ignoriere Nachrichten von ALLEN Bots (verhindert Endlosschleife)
    if (message.author.bot) return;

    // Prüfe ob die Nachricht "Doch" enthält (Groß-/Kleinschreibung egal)
    if (message.content.toLowerCase().includes('doch')) {
        // Antworte mit "Nö" und erwähne die Person
        message.channel.send(`${message.author} Nö`);
        return;
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
