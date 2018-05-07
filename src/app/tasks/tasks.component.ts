import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../core/services/user.service';
import { Task } from '../core/models/task.model';
import { TaskApiService } from '../core/services/task-api.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  @Input() userId: number;
  tasks: Task[] = [];

  get authUser() {
    return this.userService.user;
  }

  constructor(private userService: UserService, private taskApiService: TaskApiService) { }

  ngOnInit() {
    if (this.userId) {
      this.getUserTasks();
    } else {
      this.getAllTasks();
    }
  }

  getUserTasks() {
    this.taskApiService.getUserTasks(this.userId).subscribe(
      (resp: Task[]) => {
        this.tasks =  resp;
        // console.log(resp);
      },
      err => {
        console.log('error while getting the tasks for the users');
      }
    );
  }

  getAllTasks() {
    this.taskApiService.getAllTasks().subscribe(
      resp => {
        this.tasks = resp;
      },
      err => {
        console.log(err);
      }
    );
  }

}
