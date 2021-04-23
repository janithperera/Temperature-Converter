import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnChanges, OnInit } from '@angular/core';
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
      { name: 'Celsius', selected: true },
      { name: 'Kelvin', selected: false },
      { name: 'Fahrenheit', selected: false }
    ];
    this.selectedType = 'Celsius'

    this.celsius = 0;
    this.kelvin = 0;
    this.fahrenheit = 0
  }

  ngOnChanges(): void{

  }

  public onTypeChanged(value: string) {
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

  private getTempsCalculated(){
    let value = 0;
    switch (this.selectedType){
      case 'Celsius':{
        value = this.celsius;
        break;
      }
      case 'Kelvin':{
        value = this.kelvin;
        break;
      }
      case 'Fahrenheit':{
        value = this.fahrenheit;
        break;
      }
    }
    this.temperatureServices.getTemperatureCalculated(this.selectedType, value)
      .subscribe(data => {
        console.log('getTemperatureCalculated: ', data);
        this.celsius = data.celsius;
        this.fahrenheit = data.fahrenheit;
        this.kelvin = data.kelvin;
      });
  }
}
