import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Import HttpClient here

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}  // Fix the constructor syntax

  seltps() {
    return this.http.get('http://localhost:2000/java/sel');
  }

  getJava(fd: any) {
    return this.http.post('http://localhost:2000/java/data', fd);
  }

  seltpsc() {
    return this.http.get('http://localhost:2000/c/sel');
  }

  getC(fd: any) {
    return this.http.post('http://localhost:2000/c/data1', fd);
  }

}
