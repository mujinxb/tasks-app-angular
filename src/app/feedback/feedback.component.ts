import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../core/services/user.service';
import { FeedbackApiService } from '../core/services/feedback-api.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  @Input() taskId: number;
  @Input() userId: number;
  feedbacks = [];

  get authUser() {
    return this.userService.user;
  }

  constructor(private userService: UserService, private feedbackApiService: FeedbackApiService) { }

  ngOnInit() {

    if (this.taskId) {
      this.getFeedbacks('getFeedbacksByTask', this.taskId);

    } else if (this.userId) {
      this.getFeedbacks('getFeedbacksByUser', this.userId);
    }
  }

  getFeedbacks(feedbackMethod: string, id: number) {
    this.feedbackApiService[feedbackMethod](id).subscribe(
      (resp) => {
        this.feedbacks = resp;
      },
      err => {
        console.log('Error, geeting feedbacks');
      }
    );
  }

  updateFeedbacks(feedback) {
    this.feedbacks.unshift(feedback);
  }

}
