export type Ga4DeliveryStatus = "not_eligible" | "pending" | "sending" | "sent" | "uncertain";

export type SquareBooking = {
  id: string;
  status: string;
  version?: number;
  updated_at?: string;
};

export type SquareBookingEvent = {
  event_id: string;
  type: "booking.created" | "booking.updated";
  created_at?: string;
  data: {
    id?: string;
    object?: {
      booking?: SquareBooking;
    };
  };
};

export type BookingConversion = {
  bookingId: string;
  ga4Status: Ga4DeliveryStatus;
  ga4AttemptCount: number;
};

export type BookingMetrics = {
  acceptedBookings: number;
  ga4SentBookings: number;
  pendingBookings: number;
  uncertainBookings: number;
};

export type ReconciliationReport = BookingMetrics & {
  eventsExamined: number;
  eventsRecorded: number;
  status: "completed" | "needs_review";
};
