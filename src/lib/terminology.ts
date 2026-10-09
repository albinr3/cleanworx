export function normalizeTerminology(value: string): string {
  return value
    .replace(/Clients/g, "Customers")
    .replace(/clients/g, "customers")
    .replace(/Client/g, "Customer")
    .replace(/client/g, "customer");
}
