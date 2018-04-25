import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterModel } from './register.model';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { UserApiService } from '../../core/services/user-api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerModel: RegisterModel = new RegisterModel();
  registerErrors =  null;
  errorMessage = null;

  constructor(private userApiService: UserApiService,
    private router: Router,
) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.register();
  }

  register()  {
    // console.log(this.registerModel);
    this.errorMessage = null;
    this.registerErrors = null;
    this.userApiService.createNewUser(this.registerModel).subscribe(
      resp => {
        this.router.navigate(['/users']);
      },
      (err: HttpErrorResponse) => {
        if (err.status === 422) {
          console.log(err.error);
          this.errorMessage =  err.error.message;
          this.handleInvalidDataError(err.error.errors);
        } else {
          this.errorMessage = 'Something went wrong, try again!';
        }
      }
    );
  }

  handleInvalidDataError(error) {
    this.registerErrors = [];

    for (let key in error) {
      if (error.hasOwnProperty(key)) {
          this.registerErrors.push(key + ' : ' + error[key]);
      }
  }
  }

}
