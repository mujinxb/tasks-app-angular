import { Component, OnInit } from '@angular/core';

import { UserService } from '../core/services/user.service';
import { AuthUser } from '../core/auth-user.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  get user(): AuthUser {
    return this.userService.user;
  }

  constructor(private userService: UserService) { }

  ngOnInit() {

  }

}
