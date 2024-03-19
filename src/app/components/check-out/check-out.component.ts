import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { Cart } from 'src/app/interfaces/cart';
import { CartService } from 'src/app/services/cart.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent {

  id:string =''
  constructor(private _cartService:CartService, private _activatedRoute:ActivatedRoute){
    _activatedRoute.paramMap.subscribe((res)=>{
      console.log(res.get('id'));
      this.id= res.get("id")!;
    })
  }

  shippingForm:FormGroup = new FormGroup({
    details:new FormControl("", [Validators.required]),
    phone:new FormControl("", [Validators.required,  Validators.pattern(/^01[125][0-9]{8}$/)]),
    city:new FormControl("", [Validators.required]),
  })

  handleShippingForm(){
    if(this.shippingForm.valid){
      this._cartService.checkout("65e30fd8be8b523235b14c21", this.shippingForm.value).subscribe({
        next:(res)=>{
          console.log(res);
          window.location.href = res.session.url
        },
  
        error:(err)=>{
          console.log(err);
        }
      })
    }
    }
  }
