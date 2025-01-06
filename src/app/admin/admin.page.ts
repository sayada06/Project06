import { Component, OnInit } from '@angular/core';
import { DataapiService } from '../dataapi.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  constructor(
    public dataapi: DataapiService,
    public route: Router
  ) { }

  ngOnInit() {
  }

  logout(){
    this.dataapi.logout().subscribe({
      next:()=> {
        localStorage.removeItem('token');
        this.route.navigate(['/home']);
      },
      error:(err)=>{
        console.error('Logout failed:',err);
        alert('Error:${err.message}');

      }
    });
  }

}
