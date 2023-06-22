import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from './service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = "WeatherAppFrontend";
  isLoggedIn: boolean = false;

  constructor(private authService : AuthService, private router : Router) {}

  ngOnInit() {
    this.authService.isLoggedIn.subscribe((isLoggedIn: boolean) => {
      this.isLoggedIn = isLoggedIn;
    })
  }

  public logout(){
    this.authService.logout();
    this.authService.setLoggedInStatus(false)
    this.router.navigate(['/'])
  }
}
