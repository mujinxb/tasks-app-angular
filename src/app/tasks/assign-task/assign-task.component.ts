import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserItem } from '../../core/models/user-item.model';
import { TaskApiService } from '../../core/services/task-api.service';

@Component({
  selector: 'app-assign-task',
  templateUrl: './assign-task.component.html',
  styleUrls: ['./assign-task.component.css']
})
export class AssignTaskComponent implements OnInit {

  @Input() TaskId: number;
  @Output() userAssigned = new EventEmitter<UserItem[]>();

  users: UserItem[] = [];
  selectedUsers = [];

  constructor(private taskApiService: TaskApiService) { }

  ngOnInit() {
    this.getUnassignedUsers();
  }

  getUnassignedUsers() {
    this.taskApiService.getUnassignedUsers(this.TaskId).subscribe(
      (resp: UserItem[]) => {
        this.users = resp;
      },
      err => {
        console.log('error while getting users for assignment');
      }
    );
  }

  assignTasktoUsers() {
    if (this.selectedUsers.length) {
      this.taskApiService.assignTasktoUsers(this.TaskId, this.selectedUsers).subscribe(
        (resp: UserItem[]) => {
          this.userAssigned.emit(resp);
          this.users = this.users.filter( (u) => !this.selectedUsers.includes(u.id) );
          this.selectedUsers = [];
        },
        err => {
          console.log('error while assigning users to this task');
        }

      );
    }
  }

  updateUsers(user: UserItem) {
    this.users = [...this.users, user];
  }

}
