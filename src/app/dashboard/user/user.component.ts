import { Component, OnInit } from '@angular/core';

import { UserService } from '../../core/services/user.service';
import { AuthUser } from '../../core/auth-user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: AuthUser = null;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.user = this.userService.user;
  }

}
