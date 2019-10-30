const { app, BrowserWindow, Tray } = require("electron");
const path = require("path");

let mainWindow;
let tray;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  });

  mainWindow.on("closed", function() {
    mainWindow = null;
  });

  tray = new Tray(path.join(__dirname, "testImage.png"));

  setInterval(() => {
    tray.setImage(path.join(__dirname, "testImage.png"));

    console.log(process.memoryUsage());
  }, 10);
}

app.on("ready", createWindow);
