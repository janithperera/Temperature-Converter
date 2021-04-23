import { Component, OnChanges, OnInit } from '@angular/core';
import { TemperatureType } from '../models/temperature-type';

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
    this.selectedType == value;
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
}
