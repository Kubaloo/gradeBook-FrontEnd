import { Student } from "./student";
import { Mark } from "./mark";


export class StudentMarks {

    student: Student;
    marks: Mark[];

    constructor(student: Student, marks: Mark[]){
        this.student=student;
        this.marks=marks;
    }

    
}