import { Component, OnInit, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { first } from 'rxjs/operators';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  returnUrl: string;
  email:string;
  password:string;
  error:string;

  constructor(private router: Router, private auth: AuthService) {

   }

  ngOnInit() {
    
  }

  public submit() {
    this.auth.login(this.email, this.password).pipe(first())
    .subscribe(
        data => {
            this.router.navigate(['home'])
        },
        error => {
            this.error = error;

        });
  }

}
