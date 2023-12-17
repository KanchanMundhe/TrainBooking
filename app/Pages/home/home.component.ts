import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IStation, ResponseModel } from 'src/app/modal/station';
import { StationsService } from 'src/app/service/stations.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  stationList: IStation[] = [];
  travelObj: any = {
    fromStationId:'',
    toStationId:'',
    dateOfTravel:''
  } 

  constructor(private stationSrv:StationsService, private router: Router) {

  }
  ngOnInit(): void {
    this.loadStations();
  }
  loadStations() {
    this.stationSrv.getAllStations().subscribe((res:ResponseModel)=>{
      this.stationList = res.data;
    }, error=>{
      alert("Error Occoured" + JSON.stringify(error))
    })
  }

  onSearch() {
    debugger
    if(this.travelObj){
      this.router.navigate(['/search',this.travelObj.fromStationId,this.travelObj.toStationId,this.travelObj.dateOfTravel])

    }
  }
}
