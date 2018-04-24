import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assign-task',
  templateUrl: './assign-task.component.html',
  styleUrls: ['./assign-task.component.css']
})
export class AssignTaskComponent implements OnInit {

  users = [{id: 1, name: 'ali'}, {id: 2, name: 'ahmed'}, {id: 3, name: 'anwar'}];
  selectedUsers = [];

  constructor() { }

  ngOnInit() {
  }

  assignTasktoUsers() {
    if (this.selectedUsers.length) {
      console.log('task assigned to ' + this.selectedUsers);
    }

    this.users = this.users.filter( (u) => !this.selectedUsers.includes(u.id) );
    this.selectedUsers = [];
  }

}
