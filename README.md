# Youtube to Mp3 Converter

Webapp that uses node.js, express.js,
pug as template engine, and ytdl-core
module in order to convert the youtube
url.

## Installation

clone this project using:
```bash
git clone git@github.com:Jonnel21/YTMP3.git
```
install [node](https://nodejs.org/en/)
open command prompt or terminal and check if node installed by:
```bash
node -v
```

## Usage

cd into YTMP3 folder

To enable server refresh use:
```bash
npm run devstart
```
instead of npm start

On command prompt, use this command:
```bash
SET DEBUG=YTMP3:* & npm start
```

On powershell, use this command:
```powershell
$ENV:DEBUG="YTMP3:*"; npm start
```
On terminal, use this command:
```bash
DEBUG=YTMP3:* npm start
```
open browser and type:
http://localhost:3000







