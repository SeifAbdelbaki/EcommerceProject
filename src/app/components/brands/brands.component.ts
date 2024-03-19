import { Component } from '@angular/core';
import { Brands } from 'src/app/interfaces/product';
import { ProductsDataService } from 'src/app/services/products-data.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent {
  constructor(private _productsdataservice:ProductsDataService){}

  ngOnInit(){

    this.getBrands()
  }

  allBrands: Brands[] = []


  getBrands(){

    this._productsdataservice.getBrands().subscribe({
      next:(res)=>{
        console.log(res.data);
        this.allBrands = res.data 
        },
        

      error:(err)=>{
        console.log(err);
        
      }
    })
  }
}
