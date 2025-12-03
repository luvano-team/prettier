import { writeFileSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

console.log("Generating JSON schema...");

const schemaPath = resolve("src/schemas/config.schema.json");
const schema = JSON.parse(readFileSync(schemaPath, "utf8"));

schema.$id = "https://luvano.team/schemas/prettier-config.json";
schema.generatedAt = new Date().toISOString();

writeFileSync(schemaPath, JSON.stringify(schema, null, 2));

console.log("Schema updated!");
