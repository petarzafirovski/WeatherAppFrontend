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
  dailyForecasts : any;
  currentWeather: any;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {}

  public fetchDataFromApi(weatherDataHolder: WeatherDataHolder) {
    this.resetFetchedData()
    this.weatherService.fetchData(weatherDataHolder).subscribe((data: any) => {
      const parsedData = JSON.parse(data);
      console.log(parsedData)
      if (parsedData && parsedData.list) {
        this.dailyForecasts = parsedData.list;
      } else {
        this.currentWeather = parsedData;
        console.log(this.currentWeather)
      }
    });
  }

  public reset() {
    this.weatherDataHolder.cityName = '';
    this.weatherDataHolder.forecastType = '';
    this.resetFetchedData()
  }

  public resetFetchedData(){
    this.currentWeather = null;
    this.dailyForecasts = null;
  }
  
}
