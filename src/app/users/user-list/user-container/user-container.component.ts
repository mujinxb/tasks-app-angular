import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../../core/services/user.service';
import { UserApiService } from '../../../core/services/user-api.service';
import { UserItem } from '../../../core/models/user-item.model';
import { Router } from '@angular/router';
import { TaskApiService } from '../../../core/services/task-api.service';
import { Task } from '../../../core/models/task.model';
import { FeedbackApiService } from '../../../core/services/feedback-api.service';

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.css']
})
export class UserContainerComponent implements OnInit {

  @Input() userId: number;
  user: UserItem;

  get authUser() {
    return this.userService.user;
  }

  constructor(private userService: UserService,
     private userApiService: UserApiService,
     private taskApiService: TaskApiService,
     private feedbackApiService: FeedbackApiService,
     private router: Router) { }

  ngOnInit() {
    this.getUserData();
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

}
