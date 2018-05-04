import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list.component.html',
  styleUrls: ['./feedback-list.component.css']
})
export class FeedbackListComponent implements OnInit {

  @Input() feedbacks = [];

  constructor() { }

  ngOnInit() {
  }

}
