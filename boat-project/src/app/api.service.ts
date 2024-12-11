import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { User } from './types/User';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getUsers(){
    const { apiURL } = environment;
    return this.http.get<User[]>(`${apiURL}/users`);
  }
}
