import {ServiceFee} from './service-fee';

export interface Booking {
  checkInDate?: string;
  checkOutDate?: string;
  deposit?: number;
  totalPrice?: number;
  propertyId?: number;
  tenantId?: number;
  serviceFee?: ServiceFee;
  guest?: number;
}
