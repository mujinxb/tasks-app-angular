import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable()
export class FeedbackApiService {

  constructor(private apiService: ApiService) { }

  getFeedbacksByTask(id: number) {
    return this.apiService.get('tasks/' + id + '/feedbacks');
  }

  getFeedbacksByUser(id: number) {
    return this.apiService.get('users/' + id + '/feedbacks');
  }

  createFeedbackOnTask(id: number, feedbackData) {
    return this.apiService.post('tasks/' + id + '/feedbacks', feedbackData);
  }

  delteFeedback(id: number) {
    return this.apiService.delete('feedbacks/' + id);
  }
}
