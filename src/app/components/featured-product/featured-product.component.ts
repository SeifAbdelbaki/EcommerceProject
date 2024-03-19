import { WishListService } from './../../services/wish-list.service';
import { Product } from './../../interfaces/product';
import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductsDataService } from 'src/app/services/products-data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-featured-product',
  templateUrl: './featured-product.component.html',
  styleUrls: ['./featured-product.component.css']
})
export class FeaturedProductComponent {
  isLoading:boolean = true
  constructor(private _productsDataService:ProductsDataService, private _CartService:CartService, private _wishListService:WishListService , private toastr: ToastrService){  }
  
  allProducts:Product [] =[]

  ngOnInit(){
    this.getProducts()
  }
  getProducts(){
    this.isLoading = true
    this._productsDataService.getAllProducts().subscribe({
      next:(res)=>{
        console.log(res.data);
        this.isLoading = false
        this.allProducts = res.data
      },

      error:(err)=>{
        console.log(err);
        this.isLoading = false
      }
    })

  }

  addToCart(productId:string){
    this._CartService.addToCart(productId).subscribe({
      next:(res)=>{
        console.log(res);
        this._CartService.cartItems.next(res.numOfCartItems)
          this.toastr.success(res.message, '',{
            timeOut: 3000,
            progressBar: true,
            closeButton: true,
            positionClass: 'toast-bottom-right'
          });
      },

      error:(err)=>{
        console.log(err);
        this.toastr.success(err.message, '',{
          timeOut: 3000,
          progressBar: true,
          closeButton: true,
          positionClass: 'toast-top-right'
        });
      }
    })
  }

  addToWishList(productId:string){
    this._wishListService.addToWishList(productId).subscribe({
      next:(res)=>{
        console.log(res);
        this.toastr.success(res.message, '',{
          timeOut: 3000,
          progressBar: true,
          closeButton: true,
          positionClass: 'toast-bottom-right'
        })
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }

  
  searchTerm : string = ''
}
