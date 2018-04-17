import { Component, OnInit } from '@angular/core';

import { UserService } from '../core/services/user.service';
import { AuthUser } from '../core/auth-user.model';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  get user(): AuthUser {
    return this.userService.user;
  }

  constructor(private authService: AuthService, private userService: UserService) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }

}
