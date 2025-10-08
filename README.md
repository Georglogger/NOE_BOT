# Nö Discord Bot

Ein einfacher Discord Bot, der mit "Nö" antwortet, wenn jemand "Nö" schreibt.

## Setup

### 1. Discord Bot erstellen

1. Gehe zu https://discord.com/developers/applications
2. Klicke auf "New Application"
3. Gib deinem Bot einen Namen
4. Gehe zu "Bot" im Menü links
5. Klicke auf "Add Bot"
6. Kopiere den Token (unter "TOKEN" auf "Reset Token" klicken und kopieren)

### 2. Bot Permissions einstellen

1. Gehe zu "OAuth2" > "URL Generator"
2. Wähle unter "SCOPES": `bot`
3. Wähle unter "BOT PERMISSIONS":
   - Read Messages/View Channels
   - Send Messages
   - Read Message History
4. Kopiere die generierte URL und öffne sie im Browser
5. Wähle deinen Server aus und autorisiere den Bot

### 3. Bot konfigurieren

1. Öffne die `.env` Datei
2. Ersetze `dein_bot_token_hier` mit dem kopierten Token:
   ```
   DISCORD_TOKEN=dein_echter_token_hier
   ```

### 4. Dependencies installieren

Öffne die Konsole in diesem Ordner und führe aus:
```bash
npm install
```

### 5. Bot starten

```bash
npm start
```

## Wichtig für GitHub

Die `.gitignore` Datei verhindert, dass dein Token auf GitHub hochgeladen wird. **Teile niemals deinen Bot-Token!**

## Funktionsweise

- Der Bot reagiert auf alle Nachrichten, die "Nö" enthalten
- Er ignoriert seine eigenen Nachrichten
- Er antwortet immer mit "Nö"
