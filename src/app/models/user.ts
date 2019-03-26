import { Autorithies } from "./autorithies";
import { Authority } from "./authority";

export class User {
    
    firstName: string;
    password: string;
    authority: Authority[] = [];
}

