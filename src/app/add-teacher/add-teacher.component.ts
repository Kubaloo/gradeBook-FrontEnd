import { Component, OnInit } from '@angular/core';
import { Teacher } from '../models/teacher';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {
  teacher : Teacher
  name : string
  surname : string
  email : string
  subject : string
  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }
  addTeacherToList(username: string){
 
    username = this.route.snapshot.params['username'];
    
    this.teacher = new Teacher(this.name,this.surname, this.email, this.subject);
    console.log(this.teacher.subject);
  

    this.userService.addTeacher(username, this.teacher).subscribe(
      data => console.log(data)
    );
      console.log(`add teacher ${username}`)
      this.router.navigate(['admin']);
  }
}

