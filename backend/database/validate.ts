import * as Schemas from "./schemas";

export function validateSchemas() {
  const schemaPrefixes = {};
  const errors = {};
  for (const s in Schemas) {
    const schema = Schemas[s][s];
    if (!schema) {
      if (!errors[s]) {
        errors[s] = [];
      }
      errors[s].push(`Schema ${s} is not exported correctly. The export should be named the same as the schema.`);
    }

    const prefix = schema.Prefix;
    if (!schemaPrefixes[prefix]) {
      schemaPrefixes[prefix] = [];
    }
    schemaPrefixes[prefix].push(s);
  }
  for (const prefix in schemaPrefixes) {
    const schemas = schemaPrefixes[prefix];
    if (schemas.length > 1) {
      for (const s of schemas) {
        if (!errors[s]) {
          errors[s] = [];
        }
        errors[s].push(`Prefix ${prefix} is not unique.`);
      }
    }
  }
  if (Object.keys(errors).length > 0) {
    throw new Error(JSON.stringify(errors, null, 2));
  }
}