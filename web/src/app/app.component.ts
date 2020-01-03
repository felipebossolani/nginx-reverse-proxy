import { Observable } from 'rxjs';
import { WeatherService } from './weather.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'Web';
  weathers: Weather[];

  constructor(
    private http: HttpClient
  ){ }

  ngOnInit() {
    this.getWeather().subscribe((res)=>{
      this.weathers = res;
    });
  }

  getWeather() : Observable<any>{
    return this.http.get(`${environment.api_url}`);
  }
}
