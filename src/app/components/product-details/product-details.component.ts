import { ProductsDataService } from './../../services/products-data.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  isLoading:boolean = false
  
  id:string=''
  
  constructor(private _activatedRoute:ActivatedRoute, private _productsdataservice:ProductsDataService, private _CartService:CartService){}
  ngOnInit(){
    this._activatedRoute.paramMap.subscribe((res:any) => {
      console.log(res.get('id'))
      this.id = res.get('id')
    })

    this.getProduct()
  }

  product : Product ={} as Product 

  getProduct(){
    this.isLoading = true
    this._productsdataservice.getProductById(this.id).subscribe({
      next:(res)=>{
        console.log(res.data);
        this.product = res.data
        this.isLoading = false
      },
      error:(err)=>{
        console.log(err);
        this.isLoading = false
      }
    })
  }

    customOptions: OwlOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: false,
      pullDrag: false,
      dots: true,
      navSpeed: 700,
      navText: ['<', '>'],
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 1
        },
        740: {
          items: 1
        },

      },
      nav: false
    }

    
  addToCart(ProductId:string){
    this._CartService.addToCart(ProductId).subscribe({
      next:(res)=>{
        this._CartService.cartItems.next(res.numOfCartItems)
        console.log(res);
      },

      error:(err)=>{
        console.log(err);
      }
    })
  }
  searchTerm : string = ''
}

