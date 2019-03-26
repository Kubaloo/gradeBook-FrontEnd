import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { PmComponent } from './pm/pm.component';
import { AdminComponent } from './admin/admin.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';

import { AddStudentComponent } from './add-student/add-student.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { ManageGroupsComponent } from './manage-groups/manage-groups.component';
import { TeacherBoardComponent } from './teacher-board/teacher-board.component';
import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'user',
        component: UserComponent
    },
    {
        path: 'admin',
        component: AdminComponent
    },
    {
        path: 'signin',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: RegisterComponent
    },
    {
        path: 'student',
        component: StudentComponent
    },
    {
        path: 'teacher',
        component: TeacherBoardComponent
    },
    {
        path: 'addStudent/:username',
        component: AddStudentComponent
    },
    {
        path: 'addTeacher/:username',
        component: AddTeacherComponent
    },
     {
        path: 'manage-groups',
        component: ManageGroupsComponent
    },
    {
        path: 'teacher/:id',
        component: StudentListComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
