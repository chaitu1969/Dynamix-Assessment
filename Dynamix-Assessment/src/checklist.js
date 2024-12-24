import { rules } from "../config/rules.js";

export function checklist(data) {
  let rdata = rules.map((rule) => ({
    name: rule.name,
    status: rule.validate(data) ? "Passed" : "Failed",
  }));

  return rdata;
}
