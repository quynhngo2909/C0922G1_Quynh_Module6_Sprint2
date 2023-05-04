import {AbstractControl, FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';

export function validateDateRange(): ValidatorFn {
  return (formGroup: FormGroup): { [key: string]: any } => {
    const checkIn = formGroup.get('checkInDate').value;
    const checkOut = formGroup.get('checkOutDate').value;
    if (checkIn && checkOut && checkIn > checkOut) {
      return {dateRange: 'Check Out date must be after Check In date'};
    }

    return null;
  };
}

export function validateCheckIn(control: AbstractControl): ValidationErrors | null {
  const checkInDate = new Date(control.value);
  const today = new Date();
  if (checkInDate < today) {
    return {requiredCheckInDate: 'Check in date must be equal or after current date'};
  }
  return null;
}


