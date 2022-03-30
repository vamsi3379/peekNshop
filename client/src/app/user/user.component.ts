import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { environment } from '../environments/environments'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  name = environment.fullname
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  changeAccountSettings(){
    this.router.navigate(['/user-homepage/user/changeusersettings'])
  }
  orders(){
    this.router.navigate(['user-homepage/user/orders'])
  }
  changeShippingAddress(){
    this.router.navigate(['user-homepage/userchangeaddress'])
  }

}
