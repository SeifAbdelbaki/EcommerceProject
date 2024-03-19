import { Wishlist } from './../../interfaces/wishlist';
import { WishListService } from './../../services/wish-list.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent {

  constructor(private _wishlistservice:WishListService){}

  ngOnInit(){
    this.getWishList();
  }

  wishlist!: Wishlist

  getWishList(){
    this._wishlistservice.getwishlist().subscribe({
      next:(res)=>{
        console.log(res);
        this.wishlist = res
        
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  RemoveItem(id:string){
    this._wishlistservice.removeItem(id).subscribe({
      next:(res)=>{
        console.log(res);
        this.wishlist = res
      },

      error:(err)=> {
        console.log(err);
        
      },
    })
  }
}

