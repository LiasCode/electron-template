// @ts-check
import esbuild from "esbuild";
import { spawnSync } from "child_process";

export function buildElectron() {
  spawnSync("tsc", [], { stdio: "inherit", shell: true });
  console.log("ELECTRON BUILDED");

  esbuild.buildSync({
    bundle: true,
    entryPoints: ["./electron/preload/preload.ts"],
    platform: "node",
    target: "node20.4",
    packages: "external",
    outfile: "./dist/electron/preload.js",
  });
  console.log("PRELOAD BUILDED");
}
