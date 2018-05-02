import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Task } from '../models/task.model';

@Injectable()
export class TaskApiService {

  constructor(private apiService: ApiService) { }

  getAllTasks(): Observable<Task[]> {
    return this.apiService.get('tasks');
  }


  getTaskById(id: number) {
    return this.apiService.get('tasks/' + id);
  }

  createNewTask(task: Task) {
    return this.apiService.post('tasks', task);
  }

  updateTask(id: number, task: Task) {
    return this.apiService.patch('tasks/' + id, task);
  }

  deleteTask(id: number) {
    return this.apiService.delete('tasks/' + id);
  }

}
