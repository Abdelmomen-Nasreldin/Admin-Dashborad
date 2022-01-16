import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../models/users';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  user!: Users[];

  constructor(private httpUser: HttpClient) {
    this.user = [
      {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: {
          city: "safaga",
        }
      },
      {
        id: 2,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: {
          city: "safaga",
        }
      },
      {
        id: 3,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: {
          city: "safaga",
        }
      },
      {
        id: 4,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: {
          city: "safaga",
        }
      },
      {
        id: 5,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: {
          city: "safaga",
        }
      },
      {
        id: 6,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: {
          city: "safaga",
        }
      },
      {
        id: 7,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: {
          city: "safaga",
        }
      },
    ];
  }
  // users(): Observable<Users[]> {
  //   return this.httpUser.get<Users[]>('https://jsonplaceholder.typicode.com/users');
  // }
  users() {
    return this.user;
  }
}
// "id": nu,
// "name": "Leanne Graham",
// "username": "Bret",
// "email": "Sincere@april.biz",
// "address": {
//   "street": "Kulas Light",
//   "suite": "Apt. 556",
//   "city": "Gwenborough",
//   "zipcode": "92998-3874",
//   "geo": {
//     "lat": "-37.3159",
//     "lng": "81.1496"


 // address: {
        //   street: 'Kulas Light',
        //   suite: 'Apt. 556',
        //   city: 'Gwenborough',
        //   zipcode: '92998-3874',
        //   geo: {
        //     lat: '-37.3159',
        //     lng: '81.1496',
        //   },
        // },
