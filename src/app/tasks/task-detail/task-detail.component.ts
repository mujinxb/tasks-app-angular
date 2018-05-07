import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../core/services/user.service';
import { ActivatedRoute } from '@angular/router';
import { TaskApiService } from '../../core/services/task-api.service';
import { UserItem } from '../../core/models/user-item.model';
import { FeedbackComponent } from '../../feedback/feedback.component';
import { TaskUsersComponent } from '../task-users/task-users.component';
import { AssignTaskComponent } from '../assign-task/assign-task.component';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  id: number;
  @ViewChild(FeedbackComponent) private feedbackComp: FeedbackComponent;
  @ViewChild(TaskUsersComponent) private taskUsersComp: TaskUsersComponent;
  @ViewChild(AssignTaskComponent) private assignTaskComp: AssignTaskComponent;

  get authUser() {
    return this.userService.user;
  }

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
  }

  updateAssignedUsers(users: UserItem[]) {
    this.taskUsersComp.updateUsers(users);
  }

  updateUnassignedUsers(user: UserItem) {
    this.assignTaskComp.updateUsers(user);
  }

  updateFeedbacks(feedback) {
    this.feedbackComp.updateFeedbacks(feedback);
  }

}
