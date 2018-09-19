import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private static BASE_END_POINT = 'http://localhost:28326/api/';
  static GET_ACCOUNT = SettingsService.BASE_END_POINT + 'account';
   static DOES_IT_EXIST = SettingsService.BASE_END_POINT + 'does-it-exist';
    static WORKERS_END_POINT = SettingsService.BASE_END_POINT + 'workers';
     static LOGIN_END_POINT = SettingsService.BASE_END_POINT + 'account/login';
      static LOGOUT_END_POINT = SettingsService.BASE_END_POINT + 'logout';
       static LOGGED_END_POINT = SettingsService.BASE_END_POINT + 'logged'; 
       static REGISTER_END_POINT = SettingsService.BASE_END_POINT + 'register';
        static UPLOAD_END_POINT = SettingsService.BASE_END_POINT + 'upload'

}
