export type ContactInput = {
  name: string;
  organization: string;
  email: string;
  phone: string;
  employeeCount: string;
  message: string;
};

export type ValidationIssue = { path: keyof ContactInput; message: string };
export type ValidationResult = { success: true; data: ContactInput } | { success: false; issues: ValidationIssue[] };

export function validateContact(value: unknown): ValidationResult {
  if (!value || typeof value !== "object") return { success: false, issues: [{ path: "name", message: "Enter your name." }] };
  const record = value as Record<string, unknown>;
  const fields: (keyof ContactInput)[] = ["name", "organization", "email", "phone", "employeeCount", "message"];
  const data = Object.fromEntries(fields.map((field) => [field, typeof record[field] === "string" ? record[field].trim() : ""])) as ContactInput;
  const issues: ValidationIssue[] = [];
  if (data.name.length < 2 || data.name.length > 120) issues.push({ path: "name", message: "Enter your name." });
  if (data.organization.length < 2 || data.organization.length > 160) issues.push({ path: "organization", message: "Enter your organization." });
  if (data.email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) issues.push({ path: "email", message: "Enter a valid email address." });
  if (data.phone.length < 7 || data.phone.length > 30) issues.push({ path: "phone", message: "Enter a phone number." });
  if (!data.employeeCount) issues.push({ path: "employeeCount", message: "Select an employee range." });
  if (data.message.length < 10 || data.message.length > 2000) issues.push({ path: "message", message: "Please add a short message (at least 10 characters)." });
  return issues.length ? { success: false, issues } : { success: true, data };
}
