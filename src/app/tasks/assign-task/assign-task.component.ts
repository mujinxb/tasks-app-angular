import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-assign-task',
  templateUrl: './assign-task.component.html',
  styleUrls: ['./assign-task.component.css']
})
export class AssignTaskComponent implements OnInit {

  tasks = [{id: 1, title: 'abc'}, {id: 2, title: 'abc'}, {id: 3, title: 'abc'}, ];
  users = [{id: 1, name: 'a'}, {id: 2, name: 'b'}, {id: 3, name: 'a'}];

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
  }

}
