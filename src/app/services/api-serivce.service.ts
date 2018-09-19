

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../shared/models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiSerivceService {

  constructor(private http: HttpClient) { }

  getUser(): Observable<User>{
   return this.http.get("")
   .map(res=>res.json())
   .map(({email}) => new User(email));
  }


  
}
