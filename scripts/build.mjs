import { execSync } from "node:child_process";

console.log("Building @luvano/prettier...");

try {
	execSync("yarn tsc -p tsconfig.esm.json", { stdio: "inherit" });
	execSync("yarn tsc -p tsconfig.cjs.json", { stdio: "inherit" });

	console.log("Build completed successfully!");
} catch (err) {
	console.error("Build failed:", err.message);
	process.exit(1);
}
