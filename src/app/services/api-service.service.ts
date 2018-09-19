

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../shared/models/user';
import { Observable } from 'rxjs';
import { SettingsService } from '../utils/settings.service';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  getUser(): Observable<User>{
   return this.http.get(SettingsService.GET_ACCOUNT)
   .map(res=>res.json());
   
  }


  
}
