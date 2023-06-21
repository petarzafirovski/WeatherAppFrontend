import { Component, OnInit } from '@angular/core';
import { RegistrationModel } from 'src/app/models/registrationModel';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerModel = new RegistrationModel();

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  public register(registerModel: RegistrationModel) {
    this.authService.register(registerModel).subscribe();
  }
}
