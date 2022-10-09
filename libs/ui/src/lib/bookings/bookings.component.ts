import { Component, Input } from '@angular/core';
import { Booking } from '@atomus-lee/data'

@Component({
  selector: 'atomus-lee-bookings-list',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss'],
})
export class BookingsComponent {
  @Input() bookings: Booking[] = [];


}
