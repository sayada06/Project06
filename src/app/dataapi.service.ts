import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataapiService {

  constructor(
    public http:HttpClient
  ) { }

  registerUser(data:any){
    return this.http.post('http://127.0.0.1/api/register.php',data);
  }

  login(datalog:any){
    return this.http.post('http://127.0.0.1/api/login.php',datalog);
  }

  logout(){
    return this.http.post('http://127.0.0.1/api/logout.php',{});
  }


}
