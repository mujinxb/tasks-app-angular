import { Component, OnInit, Input } from '@angular/core';
import { TaskApiService } from '../../core/services/task-api.service';
import { UserItem } from '../../core/models/user-item.model';

@Component({
  selector: 'app-task-users',
  templateUrl: './task-users.component.html',
  styleUrls: ['./task-users.component.css']
})
export class TaskUsersComponent implements OnInit {

  @Input() TaskId: number;
  users: UserItem[] = [];

  constructor(private taskApiService: TaskApiService ) { }

  ngOnInit() {
    this.getTaskUsers();
  }

  getTaskUsers() {
    this.taskApiService.getTaskUsers(this.TaskId).subscribe(
      (resp: UserItem[]) => {
        this.users = resp;
      },
      err => {
        console.log('Error while getting users assigned to this task!');
      }
    );
  }

  unassignTask(id: number) {
    this.taskApiService.removeUserFromTask(this.TaskId, id).subscribe(
      (resp) => {
        this.users = this.users.filter((u) => u.id !== id );
      },
      err => {
        console.log('Error while removeing users from this task!');
      }
    );
  }

}
