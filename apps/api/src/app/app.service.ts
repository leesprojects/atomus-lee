import { Injectable } from '@nestjs/common';

import { Booking } from '@atomus-lee/data'

@Injectable()
export class AppService {
  bookings: Booking[] = [
    { name: 'Lee', dateTime: new Date(2022, 10, 10, 9, 0), reason: "Interview"},
    { name: 'Dave', dateTime: new Date(2022, 10, 10, 10, 0), reason: "Interview"},
    { name: 'Sarah', dateTime: new Date(2022, 10, 10, 11, 0), reason: "Interview"},
  ]

  getBookings(): Booking[] {
    return this.bookings;
  }

  addBooking() {
    this.bookings.push({
      name: 'New Name', dateTime: new Date(2022, 10, 10, 15, 0), reason: "Interview"
    });
  }
}
