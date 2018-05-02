import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';
import { Task } from '../../core/models/task.model';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { TaskApiService } from '../../core/services/task-api.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  task = new Task();
  errors =  null;
  errorMessage = null;

  constructor(private location: Location, private router: Router, private taskApiService: TaskApiService) { }

  ngOnInit() {
  }

  onCancel() {
    this.location.back();
  }

  onSubmit(form: NgForm) {
    this.createNewTask();
  }

  createNewTask() {
    this.errors =  null;
    this.errorMessage = null;
    this.taskApiService.createNewTask(this.task).subscribe(
      resp => {
        this.router.navigate(['/tasks']);
      },
      (err: HttpErrorResponse) => {
        if (err.status === 422) {
          // console.log(err.error);
          this.errorMessage =  err.error.message;
          this.handleInvalidDataError(err.error.errors);
        } else {
          this.errorMessage = 'Something went wrong, try again!';
        }
      }
    );
  }

  handleInvalidDataError(error) {
    this.errors = [];

    // tslint:disable-next-line:prefer-const
    for (let key in error) {
      if (error.hasOwnProperty(key)) {
          this.errors.push(key + ' : ' + error[key]);
      }
    }
  }


}
