// @ts-check
import esbuild from "esbuild";

export function buildElectron(mode = "dev") {
  esbuild.buildSync({
    bundle: true,
    entryPoints: ["./electron/main.ts"],
    platform: "node",
    target: "node20.4",
    format: "esm",
    packages: "external",
    outfile: "./dist/electron/main.js",
    minify: mode === "prod",
  });
  console.log("✅ELECTRON BUILDED");

  esbuild.buildSync({
    bundle: true,
    entryPoints: ["./electron/preload/preload.ts"],
    platform: "node",
    target: "node20.4",
    packages: "external",
    outfile: "./dist/electron/preload.js",
    minify: mode === "prod",
  });
  console.log("✅PRELOAD BUILDED");
}
