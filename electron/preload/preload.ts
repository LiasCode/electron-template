import { contextBridge, ipcRenderer } from "electron";

const ElectronAPI = {
  greets() {
    return ipcRenderer.invoke("greet");
  },
};

contextBridge.exposeInMainWorld("electronAPI", ElectronAPI);
