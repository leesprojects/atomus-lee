import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { NgForm } from '@angular/forms';

import { Booking } from '@atomus-lee/data'

@Component({
  selector: 'atomus-lee-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})

export class BookingComponent {
  title = 'atomus-lee-bookings';
  booking: Booking | undefined;

  bookings: Booking[] = [];
  toggleForm = true;
  bookingConfirm = "";

  constructor(private http: HttpClient) {
    //this.fetchBookings();
  }

  addBooking(bookingForm: NgForm){
    if(bookingForm.invalid) { return; }

    const booking: Booking = {
      name: bookingForm.value.name,
      date: bookingForm.value.date,
      reason: bookingForm.value.reason
    }

    this.http.post<{ bookingConfirm: string }>('http://localhost:3000/summary', booking)
    .subscribe((res) => {
      bookingForm.reset();
      this.bookingConfirm = res.bookingConfirm;
      this.toggleBookingList();
    })


  }

  getBookings(){
    this.http
    .get<{messsage: string, bookings: Booking[]}>('http://localhost:3000/summary')
    .subscribe((res) => {
      console.log(res.bookings)
    })
  }

  toggleBookingList(){
    this.toggleForm = !this.toggleForm;
  }
}
