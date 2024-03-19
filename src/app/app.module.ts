import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { BrandsComponent } from './components/brands/brands.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { NavbarBlankComponent } from './components/navbar-blank/navbar-blank.component';
import { NavbarAuthComponent } from './components/navbar-auth/navbar-auth.component';
import { CategoriesSliderComponent } from './components/categories-slider/categories-slider.component';
import { FeaturedProductComponent } from './components/featured-product/featured-product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { MainSliderComponent } from './components/main-slider/main-slider.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './layout/blank-layout/BlankLayoutComponent';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from "@angular/common/http";
import { RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TrimPipe } from './pipes/trim.pipe';
import { FilterProductsPipe } from './pipes/filter-products.pipe';
import { ToastrModule } from 'ngx-toastr';
import { FooterComponent } from './components/footer/footer.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { AllordersComponent } from './components/allorders/allorders.component';
import { WishListComponent } from './components/wish-list/wish-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    BrandsComponent,
    RegisterComponent,
    LoginComponent,
    NotfoundComponent,
    CategoriesComponent,
    NavbarBlankComponent,
    NavbarAuthComponent,
    AuthLayoutComponent,
    BlankLayoutComponent,
    MainSliderComponent,
    CategoriesSliderComponent,
    FeaturedProductComponent,
    ProductDetailsComponent,
    TrimPipe,
    FilterProductsPipe,
    FooterComponent,
    CheckOutComponent,
    AllordersComponent,
    WishListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    CarouselModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
