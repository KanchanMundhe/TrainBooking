import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Booking, ISearchTrain, IStation, ResponseModel, TrainAppBookingPassengers } from 'src/app/modal/station';
import { StationsService } from 'src/app/service/stations.service';
import { TrainsService } from 'src/app/service/trains.service';

@Component({
  selector: 'app-serch',
  templateUrl: './serch.component.html',
  styleUrls: ['./serch.component.css']
})
export class SerchComponent {
  searchObj: any = {
    fromStationId: '',
    toStationId: '',
    dateOfTravel: ''
  }
  stationList: IStation[] = [];
  trainsList: ISearchTrain[] = [];
  loading: boolean = false;
  bokingObj: Booking = new Booking();
  bookingPassengers: TrainAppBookingPassengers = new TrainAppBookingPassengers();

  loggedUserData: any;
  constructor(private activactedRoute: ActivatedRoute, private stationSrv: StationsService, private trainSrv: TrainsService) {
    this.activactedRoute.params.subscribe((paramObj: any) => {
      debugger;
      this.searchObj.fromStationId = paramObj.fromStationId;
      this.searchObj.toStationId = paramObj.toStationId;
      this.searchObj.dateOfTravel = paramObj.dateOfTravel;
      this.bokingObj.travelDate = this.searchObj.dateOfTravel
      this.getAllTrains();
    })
    const localData = localStorage.getItem('trainUser');
    if (localData != null) {
      this.loggedUserData = JSON.parse(localData);
      this.bokingObj.passengerId = this.loggedUserData.passengerID;

    }
  }
  ngOnInit(): void {
    this.loadStations();
  }
  AddPassenger() {
    const data = JSON.stringify(this.bookingPassengers);
    const paserData = JSON.parse(data)

    this.bokingObj.TrainAppBookingPassengers.push(paserData);
    this.bookingPassengers = new TrainAppBookingPassengers

  }
  onRemove(index: number) {
    this.bokingObj.TrainAppBookingPassengers.splice(index, 1)
  }

  openBooking(trainId: number) {
    this.bokingObj.trainId = trainId;
    const model = document.getElementById('bookmodel');
    if (model != null) {
      model.style.display = 'block'
    }
  }

  closeBooking() {
    const model = document.getElementById('bookmodel');
    if (model != null) {
      model.style.display = 'none'
    }
  }
  loadStations() {
    
    this.stationSrv.getAllStations().subscribe((res: ResponseModel) => {
      this.stationList = res.data;
    }, error => {
      alert("Error Occoured" + JSON.stringify(error))
    })
  }

  getAllTrains() {
    this.loading = true;
    this.trainSrv.getTrainsBetweenStations(this.searchObj).subscribe((result: ResponseModel) => {
      this.trainsList = result.data;
      this.loading = false;
    }, error => {
      alert("Error Occoured" + JSON.stringify(error))
    })
  }
  BookTicket() {
    this.bokingObj.bookingDate = new Date();
    this.bokingObj.totalSeats = this.bokingObj.TrainAppBookingPassengers.length;
    this.loading = true;
    this.trainSrv.bookTrain(this.bokingObj).subscribe((result: ResponseModel) => {
      if (result.result) {
        this.loading = false;
        alert('Booking Done Success')
        this.bookingPassengers = new TrainAppBookingPassengers
        this.closeBooking()
      } else {
        alert(result.message)
      }
    }, error => {
      alert("Error Occoured" + JSON.stringify(error))
    })
  }
}
