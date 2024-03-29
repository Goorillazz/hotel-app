import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking';
import { Router, ActivatedRoute } from '@angular/router';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.css'],
})
export class CreateBookingComponent {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private bookingService: BookingService
  ) {}

  booking: Booking = {
    id: 100,
    name: 'Your Name',
    roomNumber: 100,
    startDate: new Date(),
    endDate: new Date(),
  };

  dateChanged(event: Event, isStart: boolean) {
    var val = (event.target as HTMLInputElement).value;

    if (isStart) {
      this.booking.startDate = new Date(val);
    } else {
      this.booking.endDate = new Date(val);
    }
  }

  ngOnInit() {
    if (this.router.url != '/create') {
      var id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
      var bookingById = this.bookingService.getBookingById(id);
      this.booking = bookingById;
    }
  }

  save(): void {
    console.log('Make Booking');

    var bookingById = this.bookingService.getBookingById(this.booking.id);

    if (bookingById == null || bookingById == undefined) {
      this.bookingService.addBooking(this.booking);
    } else {
      bookingById = this.booking;
    }
    this.router.navigate(['bookings']);
  }
}
