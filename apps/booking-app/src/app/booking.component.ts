import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Booking } from '@atomus-lee/data'

@Component({
  selector: 'atomus-lee-booking',
  templateUrl: './booking.component.html',
})

export class BookingComponent {
  title = 'atomus-lee-booking-main';

  bookings: Booking[] = [];

  constructor(private http: HttpClient) {
    this.fetch();
  }

  fetch() {
    this.http.get<Booking[]>('/api/get-bookings').subscribe((booking) => this.bookings = booking);
  }

  addBooking() {
    this.http.post('/api/summary', {}).subscribe(() => {
      this.fetch();
    })
  }
}
