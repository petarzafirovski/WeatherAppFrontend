import { Component, OnInit } from '@angular/core';
import { LoginModel } from 'src/app/models/loginModel';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginModel = new LoginModel();
  isLoggedIn: boolean = true;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  public login(loginModel: LoginModel) {
    this.authService.login(loginModel).subscribe((token: string) => {
      localStorage.setItem('authToken', token);
    });
  }
}
