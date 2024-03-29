import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3001/api';

  constructor(private http: HttpClient) {}

  signUp(data: any) {
    return this.http.post(`${this.apiUrl}/signup`, data);
  }
}
