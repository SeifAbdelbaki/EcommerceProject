import { Product } from 'src/app/interfaces/product';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProducts'
})
export class FilterProductsPipe implements PipeTransform {

  transform(products: Product [] , searchTerm:string): Product[] {
    return products.filter((ele)=> ele.title.toLocaleLowerCase().includes(searchTerm));
  }

}
