import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseModel } from '../modal/station';
import { CONSTANT } from '../constant/constant';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StationsService {
  apiEndPoint: string ='';

  constructor(private http: HttpClient) {
    this.apiEndPoint = 'https://freeapi.miniprojectideas.com/api/TrainApp/' ;
  }

  getAllStations(): Observable<ResponseModel> {
    return this.http.get<ResponseModel>(this.apiEndPoint + CONSTANT.ENDPOINTS.GET_ALL_STATION);
  }
}
