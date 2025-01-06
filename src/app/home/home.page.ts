import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataapiService } from '../dataapi.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  txtusername: any;
  txtpassword: any;

  constructor(
    public route: Router,
    public dataapi: DataapiService,
  ) {}

  login(){
    let datalog = {
      username: this.txtusername,
      password: this.txtpassword,
    };
    this.dataapi.login(datalog).subscribe({
      next:(res:any)=>{
        if(res.message){
          localStorage.setItem('token',res.token);
          this.route.navigateByUrl('/admin');
        }else{
          alert('เข้าสู่ระบบไม่สำเร็จ'+ res.message);
        }
      },
      error:(err)=>{
        alert('เกิดข้อผิดพลาดในการเข้าสู่ระบบ' + err.message);
      }
    });
  }

  gotoregister(){
    this.route.navigateByUrl('/register');
  }

}
