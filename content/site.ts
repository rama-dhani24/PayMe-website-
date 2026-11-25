export const site = {
  name: "PayMe",
  url: "https://payme.co.tz",
  email: "hello@payme.co.tz",
  phone: "+255 700 000 000",
  whatsapp: "255700000000",
  description:
    "Payroll software for Tanzanian institutions. Calculate PAYE, NSSF, SDL, WCF and HESLB in minutes.",
};

export const copy = {
  nav: {
    features: "Features",
    pricing: "Pricing",
    about: "About",
    contact: "Contact",
    login: "Login",
    demo: "Book a demo",
  },
  hero: {
    eyebrow: "Payroll, made clear",
    title: "Run payroll in minutes. Get every detail right.",
    body: "PayMe helps Tanzanian institutions calculate PAYE, NSSF, SDL, WCF and HESLB, prepare professional payslips, and keep every payroll run organised.",
    demo: "Book a demo",
    trial: "Start free trial",
    note: "30 days free. No card required.",
    proof: "Built for TRA, NSSF, WCF and HESLB compliance",
  },
  features: {
    eyebrow: "Everything in one place",
    title: "A calmer way to run payroll",
    body: "From employee records to monthly reports, keep the work moving in one clear workspace.",
    cta: "Explore all features",
    items: [
      ["Statutory calculations", "Calculate PAYE, NSSF, SDL, WCF and HESLB with configurable rates."],
      ["Professional payslips", "Share clear, professional monthly payslips with your employees."],
      ["Review and approval", "Give the right people a clear path to review and approve payroll."],
      ["Reports and exports", "Prepare statutory summaries and export the information your team needs."],
      ["Employee records", "Keep salaries, allowances, identifiers and start dates organised."],
      ["Audit history", "See who changed a record and when, with an easy-to-follow activity log."],
    ] as [string, string][],
  },
  steps: {
    eyebrow: "Simple by design",
    title: "Three steps to a finished payroll",
    items: [
      ["Add your employees", "Import your team or add employee and compensation details."],
      ["Review the payroll", "Calculate deductions, check each employee, and approve the run."],
      ["File and pay", "Get professional payslips and statutory summaries ready for your next steps."],
    ] as [string, string][],
  },
  comparison: {
    title: "Leave the spreadsheet juggling behind",
    body: "Keep your employee data, calculations, approvals and reports connected instead of spread across files.",
  },
  security: {
    title: "Your payroll deserves careful handling",
    body: "Built with practical safeguards for sensitive employee and payroll information.",
    items: ["Encrypted connections", "Daily backups", "Role-based access", "Audit logs"],
  },
  testimonials: {
    title: "Made for teams doing the work",
    note: "Sample testimonials for preview. Replace with approved customer quotes before launch.",
  },
  pricing: {
    eyebrow: "Clear annual pricing",
    title: "Plans that grow with your team",
    body: "Choose a plan based on your employee count. Every plan starts with a 30-day free trial.",
    cta: "See all plans",
  },
  faq: {
    title: "Questions, answered",
    items: [
      ["Can I try PayMe before subscribing?", "Yes. Start with a 30-day free trial and explore the workflow with your team."],
      ["Are statutory rates guaranteed to be current?", "Rates are configurable and should be reviewed against current guidance from the relevant Tanzanian authorities."],
      ["Can I change plans as we grow?", "Yes. Contact us to upgrade when your team outgrows its current plan."],
      ["Does PayMe replace filing with authorities?", "PayMe prepares calculations and reports; your institution remains responsible for submissions and payments."],
    ] as [string, string][],
  },
  final: {
    title: "Make your next payroll your clearest one yet.",
    body: "See how PayMe can fit your institution's monthly payroll process.",
    cta: "Book a demo",
  },
  footer: {
    tagline: "Payroll clarity for Tanzanian institutions.",
    links: "Explore",
    legal: "Legal",
    privacy: "Privacy policy",
    terms: "Terms",
  },
} as const;

export const features = [
  { icon: "calculator", title: "Automatic statutory calculations", description: "Calculate PAYE, NSSF, SDL, WCF and HESLB using your configured rates and bands." },
  { icon: "fileCheck", title: "Professional payslips", description: "Give employees clear monthly payslips with the details they need." },
  { icon: "workflow", title: "Approval workflow", description: "Move payroll from draft through review, approval and payment." },
  { icon: "fileCheck", title: "Statutory reports and exports", description: "Prepare useful summaries and export payroll data for your records." },
  { icon: "history", title: "Audit log", description: "Keep a readable history of important payroll and employee changes." },
  { icon: "users", title: "Multi-user roles", description: "Give owners, HR, reviewers and employees access suited to their responsibilities." },
  { icon: "sheet", title: "Employee import", description: "Bring employee details in from a spreadsheet to get started faster." },
  { icon: "refresh", title: "Configurable rates", description: "Review and update rates when statutory requirements change." },
];

export const testimonials = [
  { quote: "The monthly process is easier to review, and the team knows exactly where each payroll stands.", name: "Finance lead", role: "Growing Tanzanian institution" },
  { quote: "Having employee records and statutory summaries together saves our team from chasing spreadsheets.", name: "HR manager", role: "Dar es Salaam business" },
  { quote: "Our staff receive clear, professional payslips each month.", name: "Operations director", role: "Tanzanian organisation" },
];

export const comparisonRows = [
  ["Monthly payroll calculations", "Manual formulas", "Connected payroll workflow"],
  ["Employee records", "Scattered spreadsheets", "Central employee register"],
  ["Approvals and audit history", "Email threads", "Review steps and activity log"],
  ["Payslips and statutory reports", "Built by hand", "Prepared in one workspace"],
];
