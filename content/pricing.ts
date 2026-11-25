export const plans = [
  { name: "Starter", employees: "Up to 15 employees", maxEmployees: 15, price: 600000, description: "For small teams getting payroll organised.", cta: "Start free trial", features: ["Monthly payroll calculations", "Professional payslips", "Statutory summaries", "2 user seats"] },
  { name: "Growth", employees: "Up to 50 employees", maxEmployees: 50, price: 1800000, description: "For growing teams that need a clear review process.", cta: "Start free trial", popular: true, features: ["Everything in Starter", "Payroll approvals", "Employee spreadsheet import", "5 user seats"] },
  { name: "Business", employees: "Up to 150 employees", maxEmployees: 150, price: 4500000, description: "For institutions with larger payroll operations.", cta: "Start free trial", features: ["Everything in Growth", "Audit log and exports", "Priority support", "Unlimited user seats"] },
  { name: "Enterprise", employees: "150+ employees", maxEmployees: null, price: null, description: "A tailored setup for complex requirements.", cta: "Contact us", features: ["Everything in Business", "Guided onboarding", "Data migration support", "Custom account support"] },
];

export const addOns = ["Bank payment files", "Employee self-service", "Leave management", "SMS / WhatsApp payslips", "Onboarding and data migration"];

export const comparisonFeatures = [
  ["Employee limit", "15", "50", "150", "Custom"],
  ["Payroll calculations", true, true, true, true],
  ["Professional payslips", true, true, true, true],
  ["Statutory reports", true, true, true, true],
  ["Spreadsheet import", false, true, true, true],
  ["Approval workflow", false, true, true, true],
  ["Audit log", false, false, true, true],
  ["Priority support", false, false, true, true],
];

export const pricingFaq: [string, string][] = [
  ["How is annual billing charged?", "Plans are priced annually in Tanzanian shillings. We will confirm the available payment process during your demo or trial."],
  ["What happens if we exceed our employee limit?", "Additional employees above the selected plan limit are billed per employee. Contact us for the current per-employee rate before expanding your plan."],
  ["Can we upgrade during the year?", "Yes. Contact the PayMe team to discuss moving to a higher employee tier."],
  ["Which payment methods can we use?", "Mobile money and bank transfer are planned payment options; confirm availability with our team when subscribing."],
  ["Does the subscription renew automatically?", "Annual renewal terms will be confirmed in your subscription agreement. We will notify you before renewal."],
];

export const formatTzs = (amount: number) => `TZS ${amount.toLocaleString("en-TZ")}`;
