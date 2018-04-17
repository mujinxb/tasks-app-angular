import { Component, OnInit, Input } from '@angular/core';
import { UserItem } from '../../../../core/models/user-item.model';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {

  @Input() user: UserItem;

  constructor() { }

  ngOnInit() {
  }

}
