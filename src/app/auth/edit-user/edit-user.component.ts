import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegisterModel } from '../register/register.model';
import { UserApiService } from '../../core/services/user-api.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  userData: RegisterModel = new RegisterModel();
  id: number;
  editErrors =  null;
  errorMessage = null;
  constructor( private route: ActivatedRoute, private userApiService: UserApiService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
  }

  onSubmit(form: NgForm) {
    this.editUser();
  }

  editUser() {
    console.log('edited');
  }

  deleteUser() {
    const ans = confirm('Do you really want to delete the user? You have the option to deactivate it!');
    if (ans) {
      console.log('deleted ' + this.id);
    }
  }

}
