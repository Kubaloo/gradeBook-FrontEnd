import { Student } from "./student";
import { Teacher } from "./teacher";


export class Mark {

    markId: number;
    markValue: string;
    student: Student;
    teacher: Teacher
  

    // constructor(markId: number, markValue: string, student: Student, teacher: Teacher) {
    //     this.markId = markId;
    //     this.markValue = markValue;
    //     this.student = student;
    //     this.teacher = teacher;
    //   }    
    constructor(markValue:string){
        this.markValue=markValue;
    }
}