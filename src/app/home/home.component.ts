import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { ApiService } from '../services/api-service.service';
import { User } from '../shared/models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
 
export class HomeComponent implements OnInit {

  user:User;
  constructor(private http: HttpClient,private service:ApiService) { }

  ngOnInit() {
    this.user = this.service.getUser()
    console.log(this.user);
  }

}
