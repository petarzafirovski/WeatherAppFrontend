import { Component, OnInit } from '@angular/core';
import { RegistrationModel } from 'src/app/models/registrationModel';
import { AuthService } from 'src/app/service/auth.service';
import { User } from 'src/app/models/userModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerModel = new RegistrationModel();

  constructor(private authService: AuthService,  private router : Router) {}

  ngOnInit(): void {}

  public register(registerModel: RegistrationModel) {
    this.authService.register(registerModel).subscribe((data : User) =>{
      alert(`Succesfully registered with with email(username) ${data.email}!`)
    });
    this.router.navigate(['/login'])
  }
}
