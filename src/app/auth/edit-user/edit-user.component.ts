import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterModel } from '../register/register.model';
import { UserApiService } from '../../core/services/user-api.service';
import { NgForm } from '@angular/forms';
import { UserItem } from '../../core/models/user-item.model';
import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  userData: UserItem = new UserItem;
  id: number;
  canEdit = false;
  editErrors =  null;
  errorMessage = null;
  constructor( private route: ActivatedRoute,
     private location: Location,
      private userApiService: UserApiService,
       private router: Router) { }

  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
    this.getUserData();
  }

  onSubmit(form: NgForm) {
    if (this.canEdit) {
      // if password field is present add it in
      if (form.value.password.trim()) {
        this.userData['password'] = form.value.password.trim();
      }
      else if ( 'password' in this.userData) {
        delete this.userData['password'];
      }

      this.editUser();
    }
  }

  editUser() {
    this.errorMessage = null;
    this.editErrors = null;
    this.userApiService.updateUser(this.id, this.userData).subscribe(
      (resp) => {
        this.location.back();
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
    this.editErrors = [];

    for (let key in error) {
      if (error.hasOwnProperty(key)) {
          this.editErrors.push(key + ' : ' + error[key]);
      }
    }
  }

  deleteUser() {
    const ans = confirm('Do you really want to delete the user? You have the option to deactivate it!');
    if (ans) {
      this.userApiService.deleteUser(this.id).subscribe(
        resp => {
          this.router.navigateByUrl('/users');
        },
        err => {
          console.log(err);
        }
      );
    }
  }

  onCancel() {
    this.location.back();
  }

  private getUserData() {
    this.userApiService.getUserById(this.id).subscribe(
      (resp: UserItem) => {
        // console.log(resp);
        this.userData = resp;
        this.canEdit = true;
      },
      () => {
        console.log('error while getting the user');
      }
    );
  }

}
