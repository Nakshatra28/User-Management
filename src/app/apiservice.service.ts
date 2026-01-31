import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  constructor(private http: HttpClient) {}

 

  getUsers() {
    return this.http.get('http://jsonplaceholder.typicode.com/users');
  }

}
