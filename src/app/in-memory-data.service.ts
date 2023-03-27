import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Booking } from './booking';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  
  createDb() {
    const bookings: Booking[] = [
      {
        id: 1,
        name: 'Alice',
        roomNumber: 100,
        startDate: new Date(),
        endDate: new Date('2021-07-21'),
      },
      {
        id: 2,
        name: 'Bob',
        roomNumber: 101,
        startDate: new Date(),
        endDate: new Date('2021-07-21'),
      },
      {
        id: 3,
        name: 'Charlie',
        roomNumber: 102,
        startDate: new Date(),
        endDate: new Date('2021-07-21'),
      },
      {
        id: 1,
        name: 'Donald',
        roomNumber: 103,
        startDate: new Date(),
        endDate: new Date('2021-07-21'),
      },
    
    ];

    return {bookings};
  }
  
  constructor() { }

}
