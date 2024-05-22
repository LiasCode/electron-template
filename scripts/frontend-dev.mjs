// @ts-check
import path from "node:path";
import child_process from "node:child_process";

const frontendDir = path.join(process.cwd(), "frontend");

process.chdir(frontendDir);

child_process.spawn("npm", ["run", "dev"], { cwd: frontendDir, stdio: "inherit", shell: true });
