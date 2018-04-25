import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../../core/services/user.service';

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.css']
})
export class UserContainerComponent implements OnInit {

  @Input() userId: number;

  get authUser() {
    return this.userService.user;
  }

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

}
