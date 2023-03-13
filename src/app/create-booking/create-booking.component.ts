import { Component } from '@angular/core';
import { Booking } from '../booking';
import { Bookings } from '../mock-bookings';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.css'],
})
export class CreateBookingComponent {

  constructor(private router: Router){}

  booking: Booking = {
    id: 100,
    name: 'Your Name',
    roomNumber: 100,
    startDate: new Date(),
    endDate: new Date(),
  };

  save(): void {
    console.log('Make Booking');
    Bookings.push(this.booking);
    this.router.navigate(['bookings']);
  }
}
