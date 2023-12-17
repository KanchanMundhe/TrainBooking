import { Component } from '@angular/core';
import { TrainsService } from 'src/app/service/trains.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
  trainList: any []= [];  loggedUserData: any;
  constructor(private trainSrv: TrainsService){
      
      const localData = localStorage.getItem('trainUser');
      if (localData != null) {
        this.loggedUserData = JSON.parse(localData);
        this.getAllTrains();
  
      }
  }
  getAllTrains() {
    this.trainSrv.getAllBookings(this.loggedUserData.passengerID).subscribe((res:any)=>{
      this.trainList =  res.data;
    })
  }
}
