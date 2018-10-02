

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SettingsService } from '../utils/settings.service';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { User } from '../shared/models/user';


@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  public getUser(){
    return  this.http.get(SettingsService.GET_ACCOUNT);
}
    

}


  

