import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

import { UserApiService } from '../../core/services/user-api.service';
import { EditUserModel } from './edit-user.model';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  userData: EditUserModel = new EditUserModel;
  id: number;
  canEdit = false;
  errors =  null;
  errorMessage = null;

  constructor( private route: ActivatedRoute,
    private location: Location,
    private userApiService: UserApiService,
    private router: Router) { }

  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
    if (this.id) {
      this.getUserData();
    }
  }

  getUserData() {
    this.userApiService.getUserById(this.id).subscribe(
      (resp: EditUserModel) => {
        // console.log(resp);
        this.userData = resp;
        this.canEdit = true;
      },
      () => {
        this.errorMessage = 'Error while getting the user data';
      }
    );
  }

  onSubmit(form: NgForm) {
    this.errorMessage = null;
    this.errors = null;

    if (this.canEdit) {
      this.performEdit(form);
    } else {
      this.createUser();
    }
  }

  performEdit(form) {
    if (this.userData['password'] && this.userData['password'].trim()) {
      this.userData['password'] = this.userData['password'].trim();
    } else if (this.userData['password']) {
      delete this.userData['password'];
    }

    this.editUser();
  }

  editUser() {
    this.userApiService.updateUser(this.id, this.userData).subscribe(
      (resp) => {
        this.location.back();
      },
      (err: HttpErrorResponse) => {
        this.handleError(err);
      }
    );
  }

  createUser() {
    this.userApiService.createNewUser(this.userData).subscribe(
      resp => {
        this.router.navigate(['/users']);
      },
      (err: HttpErrorResponse) => {
        this.handleError(err);
      }
    );
  }

  handleError(err) {
    if (err.status === 422) {
      console.log(err.error);
      this.errorMessage =  err.error.message;
      this.handleInvalidDataError(err.error.errors);
    } else {
      this.errorMessage = 'Something went wrong, try again!';
    }
  }

  handleInvalidDataError(error) {
    this.errors = [];

    // tslint:disable-next-line:prefer-const
    for (let key in error) {
      if (error.hasOwnProperty(key)) {
          this.errors.push(key + ' : ' + error[key]);
      }
    }
  }

  onDelete() {
    const ans = confirm('Do you really want to delete the user? You have the option to deactivate it!');
    if (ans) {
      this.userApiService.deleteUser(this.id).subscribe(
        resp => {
          this.router.navigateByUrl('/users');
        },
        err => {
          this.errorMessage = 'Something went wrong while deleting user, try again!';
        }
      );
    }
  }

  onCancel() {
    this.location.back();
  }

}
