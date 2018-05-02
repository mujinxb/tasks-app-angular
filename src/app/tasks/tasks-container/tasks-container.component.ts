import { Component, OnInit } from '@angular/core';
import { Task } from '../../core/models/task.model';
import { TaskApiService } from '../../core/services/task-api.service';

@Component({
  selector: 'app-tasks-container',
  templateUrl: './tasks-container.component.html',
  styleUrls: ['./tasks-container.component.css']
})
export class TasksContainerComponent implements OnInit {

  tasks: Task[];

  constructor(private taskApiService: TaskApiService) { }

  ngOnInit() {
    this.taskApiService.getAllTasks().subscribe(
      resp => {
        this.tasks = resp;
      },
      err => {
        console.log(err);
      }
    );
  }

}
