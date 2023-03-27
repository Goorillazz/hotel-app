import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css'],
})
export class BookingsComponent {
  bookings: Booking[] = [];

  constructor(private bookingService: BookingService) {}

  ngOnInit(): void {
    this.bookingService.getBookings().subscribe((result) => {
      console.log(result);
      this.bookings = result;
    });
  }

  deleteBooking(booking: Booking): void {
    this.bookingService.deleteBooking(booking);
  }
}
