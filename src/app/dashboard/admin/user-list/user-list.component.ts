import { Component, OnInit } from '@angular/core';
import { USER_ITEMS } from '../../../core/mock/user-items.mock';
import { UserItem } from '../../../core/models/user-item.model';
import { UserApiService } from '../../../core/services/user-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: UserItem[] ;
  constructor(private userApiService: UserApiService, private router: Router) { }

  ngOnInit() {
    this.userApiService.getAllUsers().subscribe(
      resp => {
        // console.log(resp);
        this.users = resp;
      },
      () => {
        console.log('error while getting the users list');
      }
    );
  }

  onUserSelect(user: UserItem) {
    this.router.navigate(['/user', user.id]);
  }

}
