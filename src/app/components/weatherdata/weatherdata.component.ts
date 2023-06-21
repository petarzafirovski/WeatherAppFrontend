import { Component, OnInit } from '@angular/core';
import { WeatherDataHolder } from 'src/app/models/weatherDataHolder';
import { WeatherService } from 'src/app/service/weather.service';

@Component({
  selector: 'app-weatherdata',
  templateUrl: './weatherdata.component.html',
  styleUrls: ['./weatherdata.component.css'],
})
export class WeatherdataComponent implements OnInit {
  weatherDataHolder = new WeatherDataHolder();
  isLoggedIn: boolean = true;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {}

  public fetchDataFromApi(weatherDataHolder: WeatherDataHolder) {
    this.weatherService
      .fetchData(weatherDataHolder)
      .subscribe((data: string) => {
        console.log(data);
      });
  }

  public reset() {
    this.weatherDataHolder.cityName = '';
    this.weatherDataHolder.forecastType = '';
  }
}
