export function isObject(variable: string | object) {
  return variable && typeof variable === "object" && !Array.isArray(variable);
}
