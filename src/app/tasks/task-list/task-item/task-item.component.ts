import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../core/services/user.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {


  get authUser() {
    return this.userService.user;
  }

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

}
