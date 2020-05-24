import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsComponent } from './products/products.component';
import {MatListModule} from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ProductComponent } from './product/product.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import { ClientsComponent } from './clients/clients.component';
import { ClientComponent } from './client/client.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductComponent,
    ClientsComponent,
    ClientComponent
  ],
  imports: [
    MatNativeDateModule,
    MatDatepickerModule,
    MatSelectModule,  
    MatInputModule ,
    MatButtonModule,
    BrowserModule,
    MatTableModule,
    MatTabsModule,
    MatSliderModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatListModule,
    BrowserAnimationsModule
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
