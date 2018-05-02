import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../core/services/user.service';
import { TaskApiService } from '../../core/services/task-api.service';
import { Task } from '../../core/models/task.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-description',
  templateUrl: './task-description.component.html',
  styleUrls: ['./task-description.component.css']
})
export class TaskDescriptionComponent implements OnInit {

  @Input() TaskId: number;
  task: Task;

  get authUser() {
    return this.userService.user;
  }

  constructor(private userService: UserService, private taskApiService: TaskApiService, private router: Router) { }

  ngOnInit() {
    this.getTask();
  }

  getTask() {
    this.taskApiService.getTaskById(this.TaskId).subscribe(
      resp => {
        this.task = resp;
      },
      err => {
        this.router.navigateByUrl('error');
      }
    );
  }

}
