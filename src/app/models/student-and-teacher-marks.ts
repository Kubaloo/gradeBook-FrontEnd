import { Teacher } from "./teacher";
import { Mark } from "./mark";
import { Student } from "./student";

export class StudentAndTeacherMarks {
   teacher: Teacher
    marks: Mark[]
  

    constructor(teacher: Teacher, marks: Mark[]){
        this.teacher = teacher
        this.marks = marks
    }
}
