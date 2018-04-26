import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserItem } from '../../core/models/user-item.model';
import { UserApiService } from '../../core/services/user-api.service';

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
      (resp: UserItem[]) => {
        // console.log(resp);
        this.users = resp;
      },
      () => {
        console.log('error while getting the users list');
      }
    );
  }

  onUserSelect(user: UserItem) {
    this.router.navigate(['/users', user.id]);
  }

}
