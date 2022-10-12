import { Booking } from '@atomus-lee/data';
import express = require('express');

const router = express.Router();


const bookings: Booking[] = [];

router.post('/', (req, res) => {
  const booking: Booking = {
    name: req.body.name,
    date: new Date(req.body.date),
    reason: req.body.reason
  }

  bookings.push(booking);

  const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  const dayName = weekdays[booking.date.getDay()];
  const date = booking.date.getDate();
  const dateSuffix= getDateSuffix(booking.date);
  const monthName = months[booking.date.getMonth()];
  const year = booking.date.getFullYear();


  const bookingConfirm = `${booking.name} booked a meeting for ${dayName} ${date}${dateSuffix} ${monthName} ${year}. Reason ${booking.reason}`;

  res.status(201).json({ bookingConfirm : bookingConfirm});
});

router.get('/', (req, res) => {
  res.status(201).json({
    message: "Booking fetched | Success",
    bookings: bookings
  });
});



function getDateSuffix(date: Date){
  const j = date.getDate() % 10
  const k = date.getDate() % 100;

  //Based on last number, except for teens
  if (j == 1 && k != 11) { //Last number is 1, except for 11
    return "st";
  }
  if (j == 2 && k != 12) { //Last number is 2, except for 12
    return "nd";
  }
  if (j == 3 && k != 13) { //Last number is 3, except for 13
    return "rd";
  }
  else {  //Last number !== 1, 2 or 3
    return "th";
  }
}


module.exports = router;
