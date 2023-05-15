import {AbstractControl, FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';

export function validateDateRange(): ValidatorFn {
  return (formGroup: FormGroup): { [key: string]: any } => {
    const checkIn = formGroup.get('checkInDate').value;
    const checkOut = formGroup.get('checkOutDate').value;
    if (checkIn && checkOut && checkIn > checkOut) {
      return {dateRange: 'Check Out date must be after Check In date.'};
    }

    return null;
  };
}

export function checkAvailableCheckIn(bookedDates: Date[]) {
  return (control: AbstractControl): ValidationErrors | null => {
    const checkInDate = new Date(control.value);
    const bookedDateSize = bookedDates?.length;
    let bookedDate = new Date();

    const today = new Date();
    if (checkInDate <= today) {
      return {requiredCheckInDate: 'Check in date must be after current date.'};
    }

    for (let i = 0; i < bookedDateSize; i++) {
      bookedDate = new Date(bookedDates[i]);
      if (checkInDate.getDate() === bookedDate.getDate() &&
        checkInDate.getMonth() === bookedDate.getMonth() &&
        checkInDate.getFullYear() === bookedDate.getFullYear()) {
        return {notAvailableCheckIn: 'Check in date is not available.'};
      }
    }
    return null;
  };
}

export function checkAvailableCheckOut(bookedDates: Date[]) {
  return (control: AbstractControl): ValidationErrors | null => {
    const checkOutDate = new Date(control.value);
    const bookedDateSize = bookedDates?.length;
    let bookedDate = new Date();
    for (let i = 0; i < bookedDateSize; i++) {
      bookedDate = new Date(bookedDates[i]);
      if (checkOutDate.getDate() === bookedDate.getDate() &&
        checkOutDate.getMonth() === bookedDate.getMonth() &&
        checkOutDate.getFullYear() === bookedDate.getFullYear()) {
        return {notAvailableCheckOut: 'Check out date is not available.'};
      }
    }
    return null;
  };
}

export function checkAvailableDate(bookedDates: Date[]): ValidatorFn {
  return (formGroup: FormGroup): { [key: string]: any } => {
    const checkInDate = new Date(formGroup.get('checkInDate').value);
    const checkOutDate = new Date(formGroup.get('checkOutDate').value);
    const bookedDateSize = bookedDates?.length;
    let bookedDate = new Date();
    let newBookedDate = new Date();
    const dateArray = [];
    const currentDate = checkInDate;
    while (currentDate <= checkOutDate) {
      dateArray.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    for (let i = 1; i < dateArray.length - 1; i++) {
      newBookedDate = new Date(dateArray[i]);
      for (let j = 0; j < bookedDateSize; j++) {
        bookedDate = new Date(bookedDates[j]);
        if (newBookedDate.getDate() === bookedDate.getDate() &&
          newBookedDate.getMonth() === bookedDate.getMonth() &&
          newBookedDate.getFullYear() === bookedDate.getFullYear()) {
          return {notAvailableDate: 'Date: ' + bookedDate.toDateString() + ' was booked.'};
        }
      }
    }
    return null;
  };
}


