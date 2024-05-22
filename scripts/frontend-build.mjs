// @ts-check
import path from "node:path";
import child_process from "node:child_process";
import fs from "fs-extra";

const currentWorkingDir = process.cwd();
const frontendDir = path.join(currentWorkingDir, "frontend");

const ch = child_process.spawn("npm", ["run", "build"], {
  cwd: frontendDir,
  stdio: "inherit",
  shell: true,
});

ch.on("close", () => {
  fs.cpSync(path.join(frontendDir, "dist"), path.join(currentWorkingDir, "dist", "frontend"), {
    recursive: true,
  });
});

ch.on("error", (error) => {
  console.error({ error });
});
