import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';
import { UserItem } from '../models/user-item.model';
import { USER_ITEMS } from '../mock/user-items.mock';
import { of } from 'rxjs/observable/of';
import { RegisterModel } from '../../auth/register/register.model';

@Injectable()
export class UserApiService {

  constructor(private apiService: ApiService) { }

  getAllUsers(): Observable<UserItem[]> {
    return of(USER_ITEMS);
  }


  getUserById() {

  }

  createNewUser(registerModel: RegisterModel) {
    return this.apiService.post('users', registerModel);
  }

}
