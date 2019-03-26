import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { UsersDataService } from '../services/users-data.service';
import { Autorithies } from '../models/autorithies';
import { Authority } from '../models/authority';
import { Router } from '@angular/router';
import { Group } from '../models/group';
import { stringify } from '@angular/core/src/util';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  board: string;
  errorMessage: string;
  users: User[] = [];
  authorities: Authority[] = [];
  user: User;
  group: Group;

  
  
  constructor(private userService: UserService, private userDataService: UsersDataService, private router: Router) { }

  ngOnInit() {
      this.authorities = [];
      this.loadUsers();
      // this.userDataService.retrieveAllUsers().subscribe(
      //   response => {
      //     console.log(response);
      //     this.users = response;
          
     
      //     // this.authorties = response;
      //   }
      // )
    // this.userService.getAdminBoard().subscribe(
    //   data => {
    //     this.board = data;
    //   },
    //   error => {
    //     this.errorMessage = `${error.status}: ${JSON.parse(error.error).message}`;
    //   }
    // );
  }
      loadUsers(){
      this.userDataService.retrieveAllUsers().subscribe(
        (users: any[]) => {
           this.users = users;
 
}

  )
}
  deleteUser(username){
    console.log(`Delete user ${username}`);
  }
  addStudent(username){
  
    console.log(`add user ${username}`)
    this.router.navigate(['addStudent', username]);
    // this.userService.addStudent('username').subscribe(
    //   response => {
    //     console.log(response);
    //   }
    // )
  }
  addTeacher(username){
    console.log(`${username}`)
    this.router.navigate(['addTeacher', username]);
  }
}
