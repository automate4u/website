export const ANNUAL_DISCOUNT = 0.15;
export const IN_HOUSE_MONTHLY = 4000;
export const AI_FRONT_DESK_GROWTH_MONTHLY = 449;
export const WORKFLOW_STARTER_MONTHLY = 999;

export const timeSavings = [
  { task: "Missed call follow-up", hours: "5-10 hrs/mo" },
  { task: "Lead intake & qualification", hours: "10-20 hrs/mo" },
  { task: "Appointment reminders & confirmations", hours: "5-15 hrs/mo" },
  { task: "CRM updates & data entry", hours: "10-30 hrs/mo" },
  { task: "Weekly reporting", hours: "5-10 hrs/mo" },
];

export function annualMonthly(monthly: number): number {
  return Math.round(monthly * (1 - ANNUAL_DISCOUNT));
}

export function formatMoney(value: number): string {
  return `$${value.toLocaleString("en-US")}`;
}
