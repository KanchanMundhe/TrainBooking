import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BookingComponent } from './Pages/booking/booking.component';
import { HomeComponent } from './Pages/home/home.component';
import { SerchComponent } from './Pages/serch/serch.component';
import { TrainComponent } from './Pages/train/train.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './Pages/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    
    BookingComponent,
    HomeComponent,
    SerchComponent,
    TrainComponent,
    AdminComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
