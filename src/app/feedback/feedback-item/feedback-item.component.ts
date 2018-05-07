import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../core/services/user.service';


@Component({
  selector: 'app-feedback-item',
  templateUrl: './feedback-item.component.html',
  styleUrls: ['./feedback-item.component.css']
})
export class FeedbackItemComponent implements OnInit {

  @Input() feedback;
  @Output() delete = new EventEmitter<number>();

  get authUser() {
    return this.userService.user;
  }

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  onFeedbackDelete(feedbackId: number) {
    this.delete.emit(feedbackId);
  }

}
