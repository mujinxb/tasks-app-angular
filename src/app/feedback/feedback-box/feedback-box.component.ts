import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-feedback-box',
  templateUrl: './feedback-box.component.html',
  styleUrls: ['./feedback-box.component.css']
})
export class FeedbackBoxComponent implements OnInit {

  tasks = [{id: 1, title: 'abc'}, {id: 2, title: 'abc'}, {id: 3, title: 'abc'}, ];

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
  }

}
