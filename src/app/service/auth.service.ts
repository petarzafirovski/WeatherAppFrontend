import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { RegistrationModel } from '../models/registrationModel';
import { User } from '../models/userModel';
import { LoginModel } from '../models/loginModel';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  registerUrlPath: string = `${environment.apiUrl}/${environment.authEndpoint}/register`;
  loginUrlPath: string = `${environment.apiUrl}/${environment.authEndpoint}/login`;
  tokenKey : string = "authToken";
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn = this.isLoggedInSubject.asObservable();

  constructor(private httpClient: HttpClient) {}

  public register(registrationModel: RegistrationModel): Observable<User> {
    return this.httpClient.post<RegistrationModel>(
      this.registerUrlPath,
      registrationModel
    );
  }

  public login(loginModel: LoginModel): Observable<string> {
    return this.httpClient.post(this.loginUrlPath, loginModel, {
      responseType: 'text',
    });
  }

  public getDataAuthorized(): Observable<string> {
    return this.httpClient.get(`${environment.apiUrl}/Weather`, {
      responseType: 'text',
    });
  }

  public isJwtStoredInLocalStorage() : boolean{
      return localStorage.getItem(this.tokenKey) == null;
  }

  public logout() : void{
    localStorage.removeItem(this.tokenKey);
  }

  setLoggedInStatus(status: boolean) {
    this.isLoggedInSubject.next(status);
  }
}
