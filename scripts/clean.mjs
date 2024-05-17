// @ts-check
import path from "node:path";
import fs from "fs-extra";

const currentWorkingDir = process.cwd();

const DIST_DIR = path.join(currentWorkingDir, "dist");

fs.removeSync(DIST_DIR);
