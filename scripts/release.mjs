import { execSync } from "node:child_process";

console.log("🚀 Running semantic-release...");

try {
  execSync("yarn semantic-release", { stdio: "inherit" });
  console.log("🎉 Release completed!");
} catch (err) {
  console.error("❌ Release failed:", err.message);
  process.exit(1);
}
