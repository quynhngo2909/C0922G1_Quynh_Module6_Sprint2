import {ServiceFee} from './service-fee';

export interface Booking {
  checkInDate?: string;
  checkOutDate?: string;
  deposit?: number;
  totalPrice?: number;
  propertyId?: number;
  tenantId?: number;
  serviceFee?: ServiceFee;
  serviceFeeId?: number;
  guest?: number;
  country?: string;
  region?: string;
  city?: string;
  title?: string;
  bookingId?: number;
  bedroom?: number;
  bath?: number;
  bed?: number;
  image?: string;
  status?: string;
}
