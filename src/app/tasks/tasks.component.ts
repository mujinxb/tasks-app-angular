import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../core/services/user.service';
import { Task } from '../core/models/task.model';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  @Input() tasks: Task[];

  get authUser() {
    return this.userService.user;
  }

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

}
