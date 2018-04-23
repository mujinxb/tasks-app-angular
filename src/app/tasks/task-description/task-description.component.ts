import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-task-description',
  templateUrl: './task-description.component.html',
  styleUrls: ['./task-description.component.css']
})
export class TaskDescriptionComponent implements OnInit {

  get authUser() {
    return this.userService.user;
  }

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

}
