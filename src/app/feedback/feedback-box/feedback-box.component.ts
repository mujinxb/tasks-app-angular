import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FeedbackApiService } from '../../core/services/feedback-api.service';

@Component({
  selector: 'app-feedback-box',
  templateUrl: './feedback-box.component.html',
  styleUrls: ['./feedback-box.component.css']
})
export class FeedbackBoxComponent implements OnInit {

  @Input() TaskId: number;

  constructor(private feedbackApiService: FeedbackApiService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    if (form.value.description && form.value.description.trim()) {
      this.postFeedback(form);
    } else {
      form.reset();
    }
  }

  postFeedback(form) {
    this.feedbackApiService.createFeedbackOnTask(this.TaskId, form.value).subscribe(
      resp => {
        form.reset();
        console.log('feedback created');
      },
      err => {
        console.log('Error creating a feedback');
      }
    );
  }

}
