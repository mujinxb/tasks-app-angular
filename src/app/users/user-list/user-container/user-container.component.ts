import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../../core/services/user.service';
import { UserApiService } from '../../../core/services/user-api.service';
import { UserItem } from '../../../core/models/user-item.model';
import { Router } from '@angular/router';
import { TaskApiService } from '../../../core/services/task-api.service';
import { Task } from '../../../core/models/task.model';

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.css']
})
export class UserContainerComponent implements OnInit {

  @Input() userId: number;
  user: UserItem;
  tasks: Task[] = [];

  get authUser() {
    return this.userService.user;
  }

  constructor(private userService: UserService,
     private userApiService: UserApiService,
     private taskApiService: TaskApiService,
     private router: Router) { }

  ngOnInit() {
    this.getUserData();
    this.getUserTasks();
  }

  getUserData() {
    this.userApiService.getUserById(this.userId).subscribe(
      (resp: UserItem) => {
        // console.log(resp);
        this.user = resp;
      },
      () => {
        this.router.navigateByUrl('error');
      }
    );
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

}
