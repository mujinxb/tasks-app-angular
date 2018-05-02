import { Component, OnInit } from '@angular/core';
import { TaskApiService } from '../../core/services/task-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Task } from '../../core/models/task.model';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  taskId: number;
  task: Task = new Task();
  canEdit = false;
  errors =  null;
  errorMessage = null;

  constructor(private location: Location, private taskApiService: TaskApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.taskId = +this.route.snapshot.params['id'];
    this.getTask();
  }

  onCancel() {
    this.location.back();
  }

  getTask() {
    this.taskApiService.getTaskById(this.taskId).subscribe(
      resp => {
        this.task = resp;
        this.canEdit = true;
      },
      err => {
        // this.router.navigateByUrl('error');
      }
    );
  }

  onDelete() {
    if (this.canEdit) {
      const ans = confirm('Do you really want to delete the Task? It will delette all feedbacks related to this task as well.');
      if (ans) {
        this.taskApiService.deleteTask(this.taskId).subscribe(
          resp => {
            this.router.navigateByUrl('/tasks');
          },
          err => {
            this.errorMessage = 'Something went wrong, we are unable to delete task at the moment.';
          }
        );
      }
    }
  }

  onSubmit(form: NgForm) {
    if (this.canEdit) {
      this.editTask();
    }
  }

  editTask() {
    this.errorMessage = null;
    this.errors = null;
    this.taskApiService.updateTask(this.taskId, this.task).subscribe(
      (resp) => {
        this.location.back();
      },
      (err: HttpErrorResponse) => {
        if (err.status === 422) {
          console.log(err.error);
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
