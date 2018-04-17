import { Component, OnInit } from '@angular/core';

import { UserService } from '../../core/services/user.service';
import { AuthUser } from '../../core/auth-user.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  user: AuthUser = null;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.user = this.userService.user;
  }

}
