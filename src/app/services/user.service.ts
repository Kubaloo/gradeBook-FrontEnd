import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../models/student';
import { Group } from '../models/group';
import { Mark } from '../models/mark';
import { Teacher } from '../models/teacher';
import { stringify } from '@angular/core/src/util';
import { StudentInfo } from '../models/student-info';
import { TeachersAndMarks } from '../models/teachers-and-marks';


@Injectable({
  providedIn: 'root'
})

export class UserService {

  private userUrl = 'http://localhost:8080/api/test/user';
  private pmUrl = 'http://localhost:8080/api/test/pm';
  private adminUrl = 'http://localhost:8080/adminPanel';

  private studentListUrl = 'http://localhost:8080/teacherPanel/';
  private studentMarksTUrl = 'http://localhost:8080/teacherPanel/';
  private teacherUrl = 'http://localhost:8080/teacherPanel';
  private temp = ``;
  private addTeacherToGroupUrl = 'http://localhost:8080/adminPanel/'
  private studentBoard = 'http://localhost:8080/studentPanel/'
 


 
  constructor(private http: HttpClient) { }
 
  getStudentMarks(): Observable<StudentInfo[]> {
    return this.http.get<StudentInfo[]>(this.studentBoard + 'myMarks');
  }
  getStudentGroup_(): Observable<Group[]> {
    return this.http.get<Group[]>(this.studentBoard + 'myGroup');
  }
  getStudentTeachers(groupId: string): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(this.studentBoard + 'myTeachers/' + groupId);
  }
 
  getStudentGroup(studentId: number): Observable<Group[]> {
    return this.http.get<Group[]>(this.studentBoard + studentId + '/myGroup');
  }

  getStudentsMarksTBoard(studentId: number): Observable<Mark[]> {
    return this.http.get<Mark[]>(this.studentMarksTUrl + studentId + '/studentsMarks');
  }
   getTeachersAndMarks(teachersId: number) : Observable<Mark[]>{
    return this.http.get<Mark[]>(this.studentBoard + teachersId + '/myMarks');
   }
  getStudentListBoard(groupId: string): Observable<Student[]> {
    return this.http.get<Student[]>(this.studentListUrl + groupId + '/studentsList');
  }
 
  getTeacherBoard(): Observable<Group[]> {
    return this.http.get<Group[]>(this.teacherUrl);
  }
  getStudentBoard(): Observable<string> {
    return this.http.get(this.pmUrl, { responseType: 'text' });
  }

  getUserBoard(): Observable<string> {
    return this.http.get(this.userUrl, { responseType: 'text' });
  }

  getPMBoard(): Observable<string> {
    return this.http.get(this.pmUrl, { responseType: 'text' });
  }

  getAdminBoard(): Observable<string> {
    return this.http.get(this.adminUrl, { responseType: 'text' });
  }
  executeGetUsersListService(){
   
   return this.http.get('http://localhost:8080/adminPanel');
  }
addStudent(username, student: Student, group){
  return this.http.post(`http://localhost:8080/adminPanel/${username}/${group}/addStudent`, student);
}
addTeacher(username, teacher: Teacher){
  return this.http.post(`http://localhost:8080/adminPanel/${username}/addTeacher`, teacher);
}
addMark(studentId: string): Observable<Mark[]> {
  return this.http.get<Mark[]>(this.studentMarksTUrl + studentId + '/addMark');
}
addTeacherToGroup(teachersId:number, groupId: string){
console.log(teachersId)
console.log(groupId)
return this.http.put(this.addTeacherToGroupUrl + teachersId +'/' + groupId + '/addGroupToTeacher', "{}")
}

}
