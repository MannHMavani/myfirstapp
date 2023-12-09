import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiLaptopService {
  apiurl = 'https://64dc7205e64a8525a0f67f2f.mockapi.io/Laptop';
  constructor(private _http: HttpClient) {}
   
  getAll(){
      return this._http.get(this.apiurl);
  }
}
