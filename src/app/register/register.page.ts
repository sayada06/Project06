import { Component, OnInit } from '@angular/core';
import { DataapiService } from '../dataapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  txtname:any;
  txtemail:any;
  txtusername:any;
  txtpassword:any;

  constructor(
    public dataapi:DataapiService,
    public route:Router
  ) { }

  ngOnInit() {
  }

  register(){
    let data = {
      name:this.txtname,
      email:this.txtemail,
      username:this.txtusername,
      password:this.txtpassword,
    }

    this.dataapi.registerUser(data).subscribe({
      next:(res:any)=>{
        this.route.navigateByUrl('/home');
      },
      error:(error)=>{
        console.log(error.message);
      }
    });
  }

  gotohome(){
    this.route.navigate(['/home']);
  }

}
