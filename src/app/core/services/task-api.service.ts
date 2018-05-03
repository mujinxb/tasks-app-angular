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

  getTaskUsers(id: number) {
    return this.apiService.get('tasks/' + id + '/users');
  }

  getUnassignedUsers(id: number) {
    return this.apiService.get('tasks/' + id + '/unassignedusers');
  }

  assignTasktoUsers(id: number, userIds: number[]) {
    return this.apiService.post('tasks/' + id + '/assigntask', { 'userIds': userIds});
  }

  removeUserFromTask(id: number, userId) {
    return this.apiService.delete('tasks/' + id + '/users/' + userId);
  }

  getUserTasks(id: number) {
    return this.apiService.get('users/' + id + '/tasks');
  }

}
