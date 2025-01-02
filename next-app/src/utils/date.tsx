export function formatDateToItalianLocale(date: Date): string {
  return date.toLocaleDateString("it-IT", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
}
