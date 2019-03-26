
export class Teacher {
    teachersName: string;
    teachersSurname: string;
    teachersEmail: string;
    subject: string;
    teachersId: number
    username: string
    constructor(name, surname, email, subject){
        this.teachersName=name;
        this.teachersSurname=surname;
        this.teachersEmail=email;
        this.subject=subject
    }
}
