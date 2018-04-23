import { Component, OnInit } from '@angular/core';
import { UserService } from '../core/services/user.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {



  get authUser() {
    return this.userService.user;
  }

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

}
