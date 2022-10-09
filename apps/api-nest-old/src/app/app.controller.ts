import { Controller, Get, Post} from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('get-bookings')
  getBookings() {
    return this.appService.getBookings();
  }

  @Post('summary')
  addBooking() {
    return this.appService.addBooking();
  }
}
