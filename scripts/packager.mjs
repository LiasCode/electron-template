// @ts-check
import electronBuilder from "electron-builder";
import { ELECTRON_BUILDER_CONFIG } from "../builder.config.mjs";

electronBuilder.build({
  dir: true,
  linux: [],
  win: [],
  config: ELECTRON_BUILDER_CONFIG,
});
