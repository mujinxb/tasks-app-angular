import { Component, OnInit, Input } from '@angular/core';
import { FeedbackApiService } from '../../core/services/feedback-api.service';

@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list.component.html',
  styleUrls: ['./feedback-list.component.css']
})
export class FeedbackListComponent implements OnInit {

  @Input() feedbacks = [];

  constructor(private feedbackApiService: FeedbackApiService) { }

  ngOnInit() {
  }

  feedbackDelete(feedbackId: number) {
    const ans = confirm('Do you really want to delete the feedback?');
    if (ans) {
      this.feedbackApiService.delteFeedback(feedbackId).subscribe(
        resp => {
          this.feedbacks = this.feedbacks.filter(feedback => feedbackId !== feedback.id);
        },
        err => {
          console.log(err);
        }
      );
    }
  }

}
