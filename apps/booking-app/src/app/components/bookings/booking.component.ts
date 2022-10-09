import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

import { Booking } from '@atomus-lee/data'
import { UnprocessableEntityException } from '@nestjs/common';

@Component({
  selector: 'atomus-lee-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})

export class BookingComponent {
  title = 'atomus-lee-bookings';

  bookings: Booking[] = [];
  booking: Booking | undefined;
  toggleBookings = false;

  constructor(private http: HttpClient) {
    this.fetchBookings();
  }

  fetchBookings() {
    this.http.get<Booking[]>('/api/get-bookings').subscribe((booking) => this.bookings = booking);
  }

  addBooking(form: NgForm) {
    if(form.value.name === undefined && form.value.date === undefined && form.value.reason === undefined){
      return;
    }

    const booking: Booking = {
      name: form.value.name,
      date: form.value.date,
      reason: form.value.reason
    }

    this.http.post('/api/summary', booking)
      .subscribe((res) => {
        console.log(res); //Response
        this.fetchBookings();
        form.resetForm();
      })
  }

  deleteBooking(){
    if(this.bookings.length <= 0){ return; }

    this.http.delete('api/summary').subscribe(() => {
      this.fetchBookings();
    }
  )}

  toggleBookingList(){
    this.toggleBookings = !this.toggleBookings;
    this.fetchBookings();
  }

}
