import { resolve } from "path";
import { existsSync } from "fs";

export function resolveConfigPath(base: string) {
  const p = resolve(process.cwd(), base);
  return existsSync(p) ? p : null;
}
