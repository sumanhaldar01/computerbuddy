import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  insjava(fd:any){
    return this.http.post("http://localhost:2000/java/add",fd)
  }

  seljava(){
    return this.http.get("http://localhost:2000/java/sel")
  }

  deljava(fd:any){
    return this.http.post("http://localhost:2000/java/del",fd)
  }

  inspython(fd:any){
    return this.http.post("http://localhost:2000/python/add",fd);
  }

  selpython(){
    return this.http.get("http://localhost:2000/python/sel");
  }

  delpython(fd:any){
    return this.http.post("http://localhost:2000/python/del",fd)
  }

  insc(fd:any){
    return this.http.post("http://localhost:2000/c/add",fd)
  }

  selc(){
    return this.http.get("http://localhost:2000/c/sel");
  }

  delc(fd:any){
    return this.http.post("http://localhost:2000/c/del",fd)
  }

}
