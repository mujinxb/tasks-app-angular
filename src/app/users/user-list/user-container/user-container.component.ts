import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../../core/services/user.service';
import { UserApiService } from '../../../core/services/user-api.service';
import { UserItem } from '../../../core/models/user-item.model';

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.css']
})
export class UserContainerComponent implements OnInit {

  @Input() userId: number;

  user: UserItem;

  get authUser() {
    return this.userService.user;
  }

  constructor(private userService: UserService, private userApiService: UserApiService) { }

  ngOnInit() {
    this.getUserData();
  }

  private getUserData() {
    this.userApiService.getUserById(this.userId).subscribe(
      (resp: UserItem) => {
        // console.log(resp);
        this.user = resp;
      },
      () => {
        console.log('error while getting the user');
      }
    );
  }

}
