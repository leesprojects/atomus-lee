import { Injectable } from '@nestjs/common';

import { Booking } from '@atomus-lee/data'

@Injectable()
export class AppService {
  bookings: Booking[] = [
    { name: 'Lee', date: new Date(2022, 10, 10, 9, 0), reason: "Interview"},
  ]

  getBookings(): Booking[] {
    return this.bookings;
  }

  addBooking(booking: Booking) {
    console.log(`API | Processing ${booking.name}`)
    this.bookings.push(booking);
  }

  deleteBooking(){
    console.log("Booking deleted");
    this.bookings.pop();
  }
}
