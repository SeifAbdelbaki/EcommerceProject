import { WishListComponent } from './components/wish-list/wish-list.component';
import { CartModule } from './cart/cart.module';
import { HomeComponent } from './components/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { authGuard } from './components/guards/auth.guard';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { BlankLayoutComponent } from './layout/blank-layout/BlankLayoutComponent';
import { BrandsComponent } from './components/brands/brands.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { AllordersComponent } from './components/allorders/allorders.component';

const routes: Routes = [

  {path:"", component:BlankLayoutComponent, canActivate:[authGuard], children:[
  {path:"", redirectTo:"home", pathMatch:"full"},

  {path:"home", component:HomeComponent, title: 'Home' },

  {path:"products", component:ProductsComponent, title:'Products'},

  {path:"categories", component:CategoriesComponent, title:'Categories'},

  {path:"brands", component:BrandsComponent, title: 'Brands'},
  
  { path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule), title:'Cart' },
  
  {path:'CheckOut/:id', component:CheckOutComponent, title: 'checkout'},

  {path:'allorders', component:AllordersComponent, title:'All Orders'},

  {path:'wishlist', component:WishListComponent},


  {path:"details/:id", component:ProductDetailsComponent, title:'Details'},

  ]},

  {path:"", component:AuthLayoutComponent, children:[
  {path:"login", component:LoginComponent, title:'Login'},

  {path:"register", component:RegisterComponent, title:'Register'},
]},


  {path:"**", component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }


