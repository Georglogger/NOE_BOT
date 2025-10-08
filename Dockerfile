# Node.js Image verwenden
FROM node:18-alpine

# Arbeitsverzeichnis erstellen
WORKDIR /app

# Package-Dateien kopieren
COPY package*.json ./

# Dependencies installieren
RUN npm install --production

# Bot-Code kopieren
COPY bot.js ./

# Bot starten
CMD ["node", "bot.js"]
