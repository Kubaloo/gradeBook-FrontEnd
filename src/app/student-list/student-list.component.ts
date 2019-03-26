import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Student } from '../models/student';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';

import { Mark } from '../models/mark';
import { StudentMarks } from '../models/student-marks';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})

export class StudentListComponent implements OnInit {

 constructor(private userService: UserService, private router : Router, private route: ActivatedRoute) {}

  students : Student[] = [];
  marks : Mark[] = [];
  mark : Mark;
  studentobj: StudentMarks[] = [];
  studentmark: StudentMarks;
  studentmarks: Mark[] = [];
  markValue: string;
  ngOnInit() {
     let id = this.route.snapshot.paramMap.get('id');
     console.log(id)
     this.userService.getStudentListBoard(id).subscribe((students: Student[]) => {
      this.students = students;
     
      students.forEach(student => 
        (this.userService.getStudentsMarksTBoard(student.studentId).subscribe((marks: Mark[]) => {
          this.marks = marks;
          this.studentobj.push(new StudentMarks(student, marks))          
        }
        
          )
        ));
      console.log(this.students);
   });
  }
  addMarkToUser(studentId: string) {
    studentId =this.route.snapshot.paramMap.get('studentId');    
    this.userService.addMark(studentId)
        .subscribe( (data) => {
          this.mark = new Mark(this.markValue);
        });

  };
}
