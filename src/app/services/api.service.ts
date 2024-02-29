import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  post(data:any): void {
    this.http.post('http://localhost:3000/add-supplier',{data
  }).subscribe({
    next: (res: any) => console.log('success'),
    error: (err: any) => console.log('Error', err),
    complete: () => { }})
  }
}
