import { Controller, Get, Post, Delete } from '@nestjs/common';

import { AppService } from './app.service';
import { Booking } from '@atomus-lee/data'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('get-bookings')
  getBookings() {
    return this.appService.getBookings();
  }

  @Post('summary')
  addBooking(booking: Booking) {
    return this.appService.addBooking(booking);
  }

  @Delete('summary')
  deleteBooking(){
    return this.appService.deleteBooking();
  }

}
