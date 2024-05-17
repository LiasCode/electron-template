import { ipcMain } from "electron";

ipcMain.handle("greet", () => {
  console.log("greeting from the renderer process");
});
