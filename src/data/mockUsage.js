export const dailyUsage = [
  { date: "2026-03-01", messages: 45, skills: { "web-search": 18, reminders: 6, email: 12, calendar: 9 } },
  { date: "2026-03-02", messages: 62, skills: { "web-search": 24, reminders: 10, email: 15, calendar: 13 } },
  { date: "2026-03-03", messages: 38, skills: { "web-search": 14, reminders: 5, email: 11, calendar: 8 } },
  { date: "2026-03-04", messages: 71, skills: { "web-search": 28, reminders: 12, email: 18, calendar: 13 } },
  { date: "2026-03-05", messages: 55, skills: { "web-search": 20, reminders: 9, email: 14, calendar: 12 } },
  { date: "2026-03-06", messages: 29, skills: { "web-search": 10, reminders: 4, email: 8, calendar: 7 } },
  { date: "2026-03-07", messages: 33, skills: { "web-search": 12, reminders: 5, email: 9, calendar: 7 } },
  { date: "2026-03-08", messages: 67, skills: { "web-search": 26, reminders: 11, email: 17, calendar: 13 } },
  { date: "2026-03-09", messages: 74, skills: { "web-search": 30, reminders: 13, email: 18, calendar: 13 } },
  { date: "2026-03-10", messages: 41, skills: { "web-search": 16, reminders: 6, email: 10, calendar: 9 } },
  { date: "2026-03-11", messages: 58, skills: { "web-search": 22, reminders: 9, email: 15, calendar: 12 } },
  { date: "2026-03-12", messages: 80, skills: { "web-search": 32, reminders: 14, email: 20, calendar: 14 } },
  { date: "2026-03-13", messages: 49, skills: { "web-search": 18, reminders: 8, email: 13, calendar: 10 } },
  { date: "2026-03-14", messages: 36, skills: { "web-search": 13, reminders: 5, email: 10, calendar: 8 } },
  { date: "2026-03-15", messages: 22, skills: { "web-search": 8, reminders: 3, email: 6, calendar: 5 } },
  { date: "2026-03-16", messages: 53, skills: { "web-search": 20, reminders: 8, email: 14, calendar: 11 } },
  { date: "2026-03-17", messages: 69, skills: { "web-search": 27, reminders: 12, email: 17, calendar: 13 } },
  { date: "2026-03-18", messages: 44, skills: { "web-search": 16, reminders: 7, email: 12, calendar: 9 } },
  { date: "2026-03-19", messages: 77, skills: { "web-search": 31, reminders: 13, email: 19, calendar: 14 } },
  { date: "2026-03-20", messages: 60, skills: { "web-search": 23, reminders: 10, email: 15, calendar: 12 } },
  { date: "2026-03-21", messages: 25, skills: { "web-search": 9, reminders: 4, email: 7, calendar: 5 } },
  { date: "2026-03-22", messages: 31, skills: { "web-search": 11, reminders: 5, email: 8, calendar: 7 } },
  { date: "2026-03-23", messages: 72, skills: { "web-search": 29, reminders: 12, email: 18, calendar: 13 } },
  { date: "2026-03-24", messages: 56, skills: { "web-search": 21, reminders: 9, email: 14, calendar: 12 } },
  { date: "2026-03-25", messages: 63, skills: { "web-search": 25, reminders: 10, email: 16, calendar: 12 } },
  { date: "2026-03-26", messages: 48, skills: { "web-search": 18, reminders: 7, email: 13, calendar: 10 } },
  { date: "2026-03-27", messages: 39, skills: { "web-search": 15, reminders: 6, email: 10, calendar: 8 } },
  { date: "2026-03-28", messages: 57, skills: { "web-search": 22, reminders: 9, email: 14, calendar: 12 } },
];

export const usageSummary = {
  totalMessages: dailyUsage.reduce((sum, day) => sum + day.messages, 0),
  avgPerDay: Math.round(dailyUsage.reduce((sum, day) => sum + day.messages, 0) / dailyUsage.length),
  busiestDay: "2026-03-12",
  skillsUsed: 4,
};

export const skillBreakdown = [
  { name: "Web Search", value: dailyUsage.reduce((sum, day) => sum + day.skills["web-search"], 0) },
  { name: "Email", value: dailyUsage.reduce((sum, day) => sum + day.skills.email, 0) },
  { name: "Reminders", value: dailyUsage.reduce((sum, day) => sum + day.skills.reminders, 0) },
  { name: "Calendar", value: dailyUsage.reduce((sum, day) => sum + day.skills.calendar, 0) },
];
