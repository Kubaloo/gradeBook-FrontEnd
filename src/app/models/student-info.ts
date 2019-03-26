import { Mark } from "./mark";
import { Student } from "./student";
import { Group } from "./group";
import { Teacher } from "./teacher";

export class StudentInfo {
    
    student: Student;
    teacher: Teacher;
    markId: number
    markValue: string
    group : Group
//     constructor( student:Student, group: Group, teacher: Teacher){
// this.marks=mark
// this.student=student
// this.group=group
// this.teacher=teacher
//     }
}
