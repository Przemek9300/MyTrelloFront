
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { SettingsService } from '../utils/settings.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  
  static auth:boolean;

  constructor(private http: HttpClient) { }



    login(email: string, password: string) {
      return this.http.post<any>(SettingsService.LOGIN_END_POINT, { Email: email, Password: password })
          .pipe(map((res:any) => {


              // login successful if there's a jwt token in the response
              if (res && res.tokenString) {
                  // store username and jwt token in local storage to keep user logged in between page refreshes
                  AuthService.auth = true;
                  
                  localStorage.setItem('access_token',JSON.stringify(res.tokenString));
              }
          }));
  }



  // public login(
  //   username: string,
  //   password: string): Observable<any> {
  //     console.log(username, password)
  //   return this.http.post(
    //  "http://localhost:28326/api/account", JSON.stringify({
    //     Email: username,
    //     Password: password
    //   }),
  //   ).pipe(
  //     map((res: Response) => {
  //       console.log(res);
  //       let result = res.json() || {};
        
  //       return result;
  //     }),)}

  // public  login(){
      
  //     this.http.get('http://localhost:28326/api/values').subscribe(data => {
  //       console.log(data);
  //     });
  //   }
  


  logout() {
    localStorage.removeItem('access_token');
  }

  public get loggedIn(): boolean {
    AuthService.auth = false;
    return (localStorage.getItem('access_token') !== null);
  }
}
