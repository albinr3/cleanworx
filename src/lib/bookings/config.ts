function required(name: string): string {
  const value = process.env[name]?.trim();
  if (!value) throw new Error(`Missing required environment variable: ${name}`);
  return value;
}

function optional(name: string, fallback: string): string {
  return process.env[name]?.trim() || fallback;
}

export function getDatabaseConfig() {
  return {
    host: required("MYSQL_HOST"),
    port: Number(optional("MYSQL_PORT", "3306")),
    database: required("MYSQL_DATABASE"),
    user: required("MYSQL_USER"),
    password: required("MYSQL_PASSWORD"),
  };
}

export function getSquareConfig() {
  return {
    accessToken: required("SQUARE_ACCESS_TOKEN"),
    apiBaseUrl: optional("SQUARE_API_BASE_URL", "https://connect.squareup.com"),
    apiVersion: optional("SQUARE_API_VERSION", "2026-09-16"),
  };
}

export function getWebhookConfig() {
  return {
    notificationUrl: required("SQUARE_WEBHOOK_NOTIFICATION_URL"),
    signatureKey: required("SQUARE_WEBHOOK_SIGNATURE_KEY"),
  };
}

export function getGa4Config() {
  return {
    apiSecret: required("GA4_MEASUREMENT_PROTOCOL_API_SECRET"),
    clientId: required("GA4_SERVER_CLIENT_ID"),
    measurementId: optional("GA4_MEASUREMENT_ID", "G-FRVB9W1H8D"),
  };
}

export function getCronSecret(): string {
  return required("BOOKING_RECONCILIATION_CRON_SECRET");
}
