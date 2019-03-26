import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { PmComponent } from './pm/pm.component';

import { httpInterceptorProviders } from './auth/auth-interceptor';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';

import { UserListComponent } from './user-list/user-list.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { ManageGroupsComponent } from './manage-groups/manage-groups.component';
import { TeacherBoardComponent } from './teacher-board/teacher-board.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    RegisterComponent,
    HomeComponent,
    AdminComponent,
    StudentComponent,
    TeacherComponent,
    UserListComponent,
    AddStudentComponent,
    StudentListComponent,
    AddTeacherComponent,
    ManageGroupsComponent,
    TeacherBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
