import Ajv from "ajv";
import schema from "../schemas/config.schema.json";

export function validateConfig(config: any) {
  const ajv = new Ajv();
  const validate = ajv.compile(schema);

  if (!validate(config)) {
    console.error(validate.errors);
    throw new Error("Invalid prettier config");
  }
}
