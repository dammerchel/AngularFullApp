import { Injectable } from '@angular/core';
import { User } from '../models/User';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  _url = 'http://localhost:3000/enroll';
  users: User[] = [
    {
      name: 'Rob',
      email: 'rob@mail.com',
      phone: 430430430,
      topic: 'React',
      timePreference: 'evening',
      subscribe: false      
    },
    {
      name: 'Bart',
      email: 'bart@mail.com',
      phone: 500500005,
      topic: 'Angular',
      timePreference: 'evening',
      subscribe: true
    },
    {
      name: 'Timmy',
      email: 'timmy@mail.com',
      phone: 725725725,
      topic: 'Vue',
      timePreference: 'morning',
      subscribe: false
    },
    {
      name: 'James',
      email: 'james@mail.com',
      phone: 896987777,
      topic: 'Angular',
      timePreference: 'morning',
      subscribe: true
    },

  ];

  constructor(private _http: HttpClient) { }

  //Provides entire array of users
  provideUsers(): User[] {
    return this.users;
  }

  //Porvides single users
  provideUser(name: string): User {
    return this.users.filter(user => user.name === name)[0];
  }
  enroll(user:User){
    return this._http.post<any>(this._url, user).pipe(catchError(this.errorHandler));
  }

  errorHandler(error:HttpErrorResponse){
    return throwError(error);
  }

  register(userData){
    return this._http.post<any>(this._url, userData);
  }
  getData(){
    return this._http.get<any>(this._url);
  }
}

