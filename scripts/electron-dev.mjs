// @ts-check
import { spawn } from "node:child_process";
import path from "node:path";
import waitOn from "wait-on";
import chokidar from "chokidar";
import { buildElectron } from "./buildElectron.mjs";

const PORT = 5173;
const ELECTRON_DIST_DIR = path.join(process.cwd(), "dist", "electron");
const ELECTRON_MAIN_PATH = path.join(ELECTRON_DIST_DIR, "main.js");

/** @type {waitOn.WaitOnOptions} */
var opts = {
  resources: [`tcp:localhost:${PORT}`],
  delay: 1000,
  interval: 100,
  simultaneous: 1,
};

console.log("Waiting for " + opts.resources[0]);
await waitOn(opts);

function spawnExecElectron() {
  return spawn("electron", [ELECTRON_MAIN_PATH], { stdio: "inherit", shell: true });
}

buildElectron("dev");
let currentProcess = spawnExecElectron();

chokidar.watch(path.join(process.cwd(), "electron")).on("change", () => {
  currentProcess.kill();
  buildElectron("dev");
  currentProcess = spawnExecElectron();
});
