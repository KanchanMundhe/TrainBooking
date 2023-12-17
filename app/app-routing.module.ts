import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { SerchComponent } from './Pages/serch/serch.component';
import { BookingComponent } from './Pages/booking/booking.component';
import { AdminComponent } from './Pages/admin/admin.component';
import { TrainComponent } from './Pages/train/train.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'home',
    component: HomeComponent
  },
   {
    path:'search/:fromStationId/:toStationId/:dateOfTravel',
    component:SerchComponent
   },
   {
    path:'bookings',
    component:BookingComponent
   },
   {
    path:'admin',
    component:AdminComponent
   },
   {
    path:'trains',
    component:TrainComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
