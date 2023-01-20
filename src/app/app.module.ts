import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsTableComponent } from './components/helpers/products-table/products-table.component';
import { ProductDetailsComponent } from './components/helpers/product-details/product-details.component';
import { ModalComponent } from './components/helpers/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsTableComponent,
    ProductDetailsComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
