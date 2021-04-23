import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnChanges, OnInit } from '@angular/core';
import { TemperatureTypes } from '../models/enums';
import { TemperatureType } from '../models/temperature-type';
import { TemperatureService } from '../temperature.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit, OnChanges {
  public temperatureTypes: TemperatureType[];
  public selectedType: string;
  public celsius: number;
  public kelvin: number;
  public fahrenheit: number;

  constructor(private temperatureServices: TemperatureService){
    
  }

  ngOnInit(): void {
    this.temperatureTypes = [
      { id: TemperatureTypes.Celsius, name: 'Celsius', selected: true },
      { id: TemperatureTypes.Kelvin, name: 'Kelvin', selected: false },
      { id: TemperatureTypes.Fahrenheit, name: 'Fahrenheit', selected: false }
    ];
    this.selectedType = 'Celsius';
    //console.log('ngOnInit: ', this.selectedType);

    this.celsius = 0;
    this.kelvin = 0;
    this.fahrenheit = 0
  }

  ngOnChanges(): void{

  }

  public onTypeChanged(value: string) {
    console.log('onTypeChanged: ', value);
    this.temperatureTypes.forEach(type => {
      if (type.name == value) {
        type.selected = true;
      }
    });
    this.selectedType = value;
  }

  public onCelsiusChanged(value: number) {
    this.celsius = value;
  }

  public onKelvinChanged(value: number) {
    this.kelvin = value;
  }

  public onFahrenheitChanged(value: number) {
    this.fahrenheit = value;
  }

  public onCalculateClicked() {
    this.getTempsCalculated();
  }
  //type:TemperatureTypes
  private getTempsCalculated(){
    let value:number = 0;
    let type:TemperatureTypes;
    switch (this.selectedType){
      case 'Celsius':{
        type = TemperatureTypes.Celsius;
        value = this.celsius;
        break;
      }
      case 'Kelvin':{
        type = TemperatureTypes.Kelvin;
        value = this.kelvin;
        break;
      }
      case 'Fahrenheit':{
        type = TemperatureTypes.Fahrenheit;
        value = this.fahrenheit;
        break;
      }
      default:break;
    }
    this.temperatureServices.getTemperatureCalculated(type, value)
      .subscribe(data => {
        console.log('getTemperatureCalculated: ', data);
        this.celsius = data.celsius;
        this.fahrenheit = data.fahrenheit;
        this.kelvin = data.kelvin;
      });
  }
}
