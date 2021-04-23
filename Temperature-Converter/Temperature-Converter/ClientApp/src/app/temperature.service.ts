import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TemperatureService {

  constructor(@Inject('BASE_URL') private baseUrl: string, private httpClient: HttpClient){
        
  }

  public getTemperatureCalculated(type:string, value:number){
      let url = `${this.baseUrl}api/Temperature/calculate?type=${type}&value=${value}`;
      return this.httpClient.get<any>(url);
  }
}
