import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Cart } from '../interfaces/cart';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  
})
export class CartComponent {
  constructor(private _cartService:CartService){}

  hide = true;
  
  ngOnInit(){
    this.getCart()
  }

  cart!:Cart  
  
  getCart(){
    this._cartService.getCart().subscribe({
      next:(res)=>{
        console.log(res);
        this.cart = res
      },

      error:(err)=>{
        console.log(err);
      }
    })
  }

  UpdateCart(id:string, count:number){
    if(count >0){
    this._cartService.UpdateCartProductQuantity(id, count).subscribe({
      next:(res)=>{

        console.log(res);
        this.cart = res
      },

      error:(err)=>{
        console.log(err);
      }
  
    })}

    else{
      this.RemoveItem(id)
    }
  }

  RemoveItem(id:string){
    this._cartService.removeItem(id).subscribe({
      next:(res)=>{
        console.log(res);
        this._cartService.cartItems.next(res.numOfCartItems)
        this.cart = res
      },

      error:(err)=> {
        console.log(err);
        
      },
    })
  }
}
