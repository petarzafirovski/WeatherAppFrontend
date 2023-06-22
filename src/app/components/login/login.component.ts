import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/models/loginModel';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginModel = new LoginModel();

  constructor(private authService: AuthService, private router : Router) {}

  ngOnInit(): void {}

  public login(loginModel: LoginModel) {
    this.authService.login(loginModel).subscribe((token: string) => {
      localStorage.setItem('authToken', token);
      this.authService.setLoggedInStatus(true);
      alert("Succsesfully logged in!")
      this.router.navigate(['/weather-data'])
    });
  }
}
