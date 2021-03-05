const electron = require("electron");
function createWindow() {}

electron.app.whenReady().then(function () {
  const window = new electron.BrowserWindow({
    width: 1400,
    height: 1000,
  });
  window.loadFile("views/index.html");
  window.webContents.openDevTools();
});
