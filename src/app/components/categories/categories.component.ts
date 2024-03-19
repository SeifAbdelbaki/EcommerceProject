import { Component } from '@angular/core';
import { Category } from 'src/app/interfaces/product';
import { ProductsDataService } from 'src/app/services/products-data.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
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


}
