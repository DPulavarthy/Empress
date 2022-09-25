import { BrowserWindow, app } from 'electron'

app
    .on('ready', () => main())
    .on('second-instance', () => main())
    .on('activate', () => (!BrowserWindow.getAllWindows().length ? app.emit('ready') : void 0))
    .on('window-all-closed', () => void 0)
    .on('quit', () => process.exit());

function main() {
    let window = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
    })

    window.removeMenu()
    window.loadFile('./web/pages/index.html')
}