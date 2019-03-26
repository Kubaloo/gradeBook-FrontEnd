import { Mark } from "./mark";
import { Teacher } from "./teacher";
import { Student } from "./student";

export class TeachersAndMarks {
    markValue: string
    markId : number
    student : Student
    teacher: Teacher
    
    constructor(markId:number, markValue: string, teacher: Teacher, student: Student){
        this.markId = markId
         this.markValue = markValue
         this.teacher = teacher
        this.student = student
    }
}
