import { Component, OnInit, Input } from '@angular/core';
import { UserItem } from '../../core/models/user-item.model';
import { UserService } from '../../core/services/user.service';
import { UserApiService } from '../../core/services/user-api.service';
import { TaskApiService } from '../../core/services/task-api.service';
import { FeedbackApiService } from '../../core/services/feedback-api.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  @Input() userId: number;
  user: UserItem;

  get authUser() {
    return this.userService.user;
  }

  constructor(private userService: UserService,
     private userApiService: UserApiService,
     private taskApiService: TaskApiService,
     private feedbackApiService: FeedbackApiService,
     private router: Router,
     private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this. userId = id;
    }
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
