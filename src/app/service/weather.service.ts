import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { WeatherDataHolder } from '../models/weatherDataHolder';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  weatherUrlPath: string = `${environment.apiUrl}/${environment.weatherEndpoint}`;

  constructor(private httpClient: HttpClient) {}

  public fetchData(weatherDataHolder: WeatherDataHolder): Observable<string> {
    const queryParams = new HttpParams()
      .set('city', weatherDataHolder.cityName)
      .set('forecastType', weatherDataHolder.forecastType);
    return this.httpClient.post(this.weatherUrlPath, null, {
      responseType: 'text',
      params: queryParams,
    });
  }
}
