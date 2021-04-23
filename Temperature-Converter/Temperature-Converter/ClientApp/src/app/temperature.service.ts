import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { TemperatureTypes } from './models/enums';

@Injectable({
  providedIn: 'root'
})
export class TemperatureService {

  constructor(@Inject('BASE_URL') private baseUrl: string, private httpClient: HttpClient){
        
  }

  public getTemperatureCalculated(type:TemperatureTypes, value:number){
      let url = `${this.baseUrl}api/Temperature/calculate?type=${type}&value=${value}`;
      return this.httpClient.get<any>(url);
  }
}
