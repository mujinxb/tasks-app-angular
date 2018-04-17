import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginModel } from '../login.model';

import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../core/services/user.service';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginModel: LoginModel = new LoginModel();

  returnUrl: string;
  loginError = false;

  constructor(private atuhService: AuthService,
            private route: ActivatedRoute,
            private router: Router,
            private userService: UserService
    ) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
  }

  onSubmit(form: NgForm) {
    this.login();
  }

  login() {
    this.atuhService.login(this.loginModel).subscribe(
      resp => {
        if (this.returnUrl) {
          this.router.navigateByUrl(this.returnUrl);
        } else {
          this.router.navigate(['/dashboard']);
        }
      },
      () => {
        this.loginError = true;
      }
    );
  }

}
