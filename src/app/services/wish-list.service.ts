import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishListService {
  baseurl:string = 'https://ecommerce.routemisr.com'
  constructor(private _httpClient:HttpClient) { }

  addToWishList(id:string):Observable<any>{
    return this._httpClient.post(`${this.baseurl}/api/v1/wishlist`, {productId: id},{
      headers:{
        token: `${localStorage.getItem('_token')}`
      }
    })
  }

  getwishlist():Observable<any>{
    return this._httpClient.get('https://ecommerce.routemisr.com/api/v1/wishlist',
    {
      headers:{
        token: `${localStorage.getItem('_token')}`
      }
    })
  }

  removeItem(id:string):Observable<any>{
    return this._httpClient.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`, {headers:{token: `${localStorage.getItem('_token')}`}})
  }
}
