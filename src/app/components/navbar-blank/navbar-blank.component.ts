import { CartService } from 'src/app/services/cart.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-blank',
  templateUrl: './navbar-blank.component.html',
  styleUrls: ['./navbar-blank.component.css']
})
export class NavbarBlankComponent {
  constructor(private _router:Router, private _CartService:CartService){}

  signOut(){
    localStorage.removeItem("_token")
    this._router.navigate(['/login'])
  }

  NumberOfitems: Number = 0

  ngOnInit(){
    this._CartService.cartItems.subscribe((res)=>{
      this.NumberOfitems = res
    })
  } 
}