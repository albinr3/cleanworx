-- Execute once in the Hostinger MySQL database before enabling the Square webhook.
-- This schema deliberately stores operational IDs and delivery state only. It does
-- not retain Square customer names, notes, email addresses, or phone numbers.

CREATE TABLE IF NOT EXISTS square_booking_webhook_events (
  event_id VARCHAR(192) NOT NULL,
  booking_id VARCHAR(192) NOT NULL,
  event_type VARCHAR(64) NOT NULL,
  event_created_at DATETIME(3) NULL,
  received_at DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  payload_sha256 CHAR(64) NOT NULL,
  source ENUM('webhook', 'events_api') NOT NULL DEFAULT 'webhook',
  PRIMARY KEY (event_id),
  KEY idx_square_booking_webhook_events_booking_id (booking_id),
  KEY idx_square_booking_webhook_events_created_at (event_created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS square_booking_conversions (
  booking_id VARCHAR(192) NOT NULL,
  last_square_status VARCHAR(32) NOT NULL,
  last_square_version BIGINT UNSIGNED NULL,
  last_square_updated_at DATETIME(3) NULL,
  accepted_at DATETIME(3) NULL,
  ga4_status ENUM('not_eligible', 'pending', 'sending', 'sent', 'uncertain') NOT NULL DEFAULT 'not_eligible',
  ga4_attempt_count INT UNSIGNED NOT NULL DEFAULT 0,
  ga4_locked_until DATETIME(3) NULL,
  ga4_sent_at DATETIME(3) NULL,
  ga4_last_error VARCHAR(512) NULL,
  created_at DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  updated_at DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
  PRIMARY KEY (booking_id),
  KEY idx_square_booking_conversions_ga4_status (ga4_status),
  KEY idx_square_booking_conversions_square_status (last_square_status)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS square_booking_reconciliation_runs (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  started_at DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  completed_at DATETIME(3) NULL,
  events_examined INT UNSIGNED NOT NULL DEFAULT 0,
  events_recorded INT UNSIGNED NOT NULL DEFAULT 0,
  accepted_bookings INT UNSIGNED NOT NULL DEFAULT 0,
  ga4_sent_bookings INT UNSIGNED NOT NULL DEFAULT 0,
  pending_bookings INT UNSIGNED NOT NULL DEFAULT 0,
  uncertain_bookings INT UNSIGNED NOT NULL DEFAULT 0,
  status ENUM('running', 'completed', 'needs_review', 'failed') NOT NULL DEFAULT 'running',
  error_message VARCHAR(512) NULL,
  PRIMARY KEY (id),
  KEY idx_square_booking_reconciliation_runs_status (status, started_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
