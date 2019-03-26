import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UsersDataService } from '../services/users-data.service';
import { toBase64String } from '@angular/compiler/src/output/source_map';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[]
  constructor() { }
    private UserListService: UsersDataService
  ngOnInit() {
  this.UserListService.retrieveAllUsers().subscribe(
    response => {
      console.log(response);
      this.users = response});
  
  }

}
