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
  editErrors =  null;
  errorMessage = null;
  constructor( private route: ActivatedRoute, private userApiService: UserApiService) { }

  ngOnInit() {
    console.log(this.route.snapshot.params['id']);
  }

  onSubmit(form: NgForm) {
    this.editUser();
  }

  editUser() {
    console.log('edited');
  }

}
