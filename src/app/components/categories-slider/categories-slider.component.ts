import { Component } from '@angular/core';
import { Category } from 'src/app/interfaces/product';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProductsDataService } from 'src/app/services/products-data.service';

@Component({
  selector: 'app-categories-slider-new',
  templateUrl: './categories-slider.component.html',
  styleUrls: ['./categories-slider.component.css']
})
export class CategoriesSliderComponent {
  constructor(private _productsdataservice:ProductsDataService){}

  ngOnInit(){

    this.getAllCategories()
  }

  allCategories: Category[] = []

  getAllCategories(){

    this._productsdataservice.getCategories().subscribe({
      next:(res)=>{
        console.log(res.data);
        this.allCategories = res.data
      },

      error:(err)=>{
        console.log(err);
        
      }
    })
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 5
      },
      
    },
    nav: true
  }


}
