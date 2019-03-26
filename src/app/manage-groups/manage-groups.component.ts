import { Component, OnInit } from '@angular/core';
import { UsersDataService } from '../services/users-data.service';
import { Group } from '../models/group';
import { UserService } from '../services/user.service';
import { Teacher } from '../models/teacher';

@Component({
  selector: 'app-manage-groups',
  templateUrl: './manage-groups.component.html',
  styleUrls: ['./manage-groups.component.css']
})
export class ManageGroupsComponent implements OnInit {
  groups: Group[] = [];
  
  teacher: Teacher
  group: Group;
  teachersName: string
  teachers: Teacher[] = [];
  teacherIdToSend: number;
 
  constructor(private userDataService: UsersDataService, private userService: UserService) { }
  
  groupId: string
  selectedTeacher: string
  ngOnInit() {
    this.loadGroups();
    this.loadTeachers();

    
  }
  loadGroups(){

    this.userDataService.retrieveAllGroups().subscribe(
      (groups: any[]) => {
         this.groups = groups;
      });

    } 
    loadTeachers(){
      this.userDataService.retrieveAllTeachers().subscribe(
        (teachers: any[]) => {
           this.teachers = teachers;
        
        });

    } 
    saveTeacherToGroup(groupId: string) {
        this.userService.addTeacherToGroup(this.teacherIdToSend, groupId).subscribe(
          data => console.log(data)
         )
      
        console.log(this.selectedTeacher)
       console.log(groupId)
    }
      onChange($event){
        console.log($event.target.value)
        this.selectedTeacher = $event.target.value
        this.teachers.forEach(
      teacher => {
        if(teacher.teachersName === this.selectedTeacher) {
          console.log(teacher.teachersId)
         this.teacherIdToSend = teacher.teachersId
        }
      });
      }
  }

