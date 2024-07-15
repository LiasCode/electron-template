import { app, BrowserWindow } from "electron";
import path from "node:path";
import isDev from "electron-is-dev";
import "./handlers";

const URL_DEV = "http://localhost:5173";
const FRONTEND_ASSETS_DIR = path.join(import.meta.dirname, "..", "frontend");
const INDEX_HTML_PATH = path.join(FRONTEND_ASSETS_DIR, "index.html");

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 800,
    minHeight: 600,
    webPreferences: {
      sandbox: true,
      nodeIntegration: false,
      nodeIntegrationInWorker: false,
      contextIsolation: true,
      devTools: isDev,
      preload: path.join(import.meta.dirname, "preload.js"),
    },
    center: true,
    darkTheme: true,
    alwaysOnTop: isDev,
  });

  if (isDev) {
    console.log("Loading from url -> " + URL_DEV);
  } else {
    console.log("Loading from file -> " + INDEX_HTML_PATH);
  }

  mainWindow.loadURL(isDev ? URL_DEV : `file://${INDEX_HTML_PATH}`);
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
