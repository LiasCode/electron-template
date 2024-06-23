// @ts-check
import electronBuilder from "electron-builder";
import { ELECTRON_BUILDER_CONFIG } from "../builder.config.mjs";

electronBuilder.build({
  linux: [],
  win: [],
  // mac: [],
  config: ELECTRON_BUILDER_CONFIG,
});
