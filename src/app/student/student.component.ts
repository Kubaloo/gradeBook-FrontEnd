import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { UsersDataService } from '../services/users-data.service';
import { Router } from '@angular/router';
import { StudentInfo } from '../models/student-info';
import { Student } from '../models/student';
import { Mark } from '../models/mark';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { TeachersAndMarks } from '../models/teachers-and-marks';
import { Teacher } from '../models/teacher';
import { forEach } from '@angular/router/src/utils/collection';
import { StudentAndTeacherMarks } from '../models/student-and-teacher-marks';
import { TouchSequence } from 'selenium-webdriver';
import { Group } from '../models/group';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  studentInfo: StudentInfo[] = [];
  
  studentAndTeacherMarks: StudentAndTeacherMarks[] = [];
  student: Student
  groupId : string
  groupsId : string
  marks : Mark[] = [];
  teachers : Teacher[]
  group: Group


  teachersAndMarks : TeachersAndMarks[] = []
  constructor(private userService: UserService, private userDataService: UsersDataService, private router: Router) { }

  ngOnInit() {
    this.loadStudentInfo()
  }

  loadStudentInfo(){

    this.userService.getStudentGroup_().subscribe(
      (group: Group[]) => {
        this.group = group[0]
        this.groupId = group[0].groupId
   

      this.userService.getStudentTeachers(this.groupId).subscribe((teachers: any) => {
            this.teachers = teachers
          
            teachers.forEach(teachers => (
          
              this.userService.getTeachersAndMarks(teachers.teachersId).subscribe((marks: Mark[]) =>{
                this.marks = marks
                    
                    this.studentAndTeacherMarks.push(new StudentAndTeacherMarks(teachers, this.marks))
                    console.log(this.studentAndTeacherMarks)

              })
              
            )
          )  
      }) 
      });

       
    this.userService.getStudentMarks().subscribe(
      (studentInfo: any) => {
        
         this.studentInfo = studentInfo;
     
      });

   
    } 

}
