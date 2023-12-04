import { log } from "console";
import inquirer from "inquirer";

class Person{
    name!:string;
    age!:number;
    constructor(name:string,age:number){
        this.name=name;
        this.age = age;
    }
    getname(){
        return this.name
    }
}

class Student extends Person{
    rollNo!:number;
    courses: Course[]= [];

    constructor(name:string,age:number){
        super(name,age);
        let rollNo = Math.random()*100000
        this.rollNo = Math.floor(rollNo)
    }

    registerforcourses(course: Course){
        this.courses.push(course)
    }
}

class Instructor extends Person{
    salary:number;
    courses: Course[] = [];
    constructor(name:string,age:number,salary:number){
        super(name,age);
        this.salary = salary;
    }
    assignCourse(courses:Course){
        this.courses.push(courses);
    }
}

class Course {
    name: string;
    id :string;
    students: Student[] = [];
    instructor!: Instructor;
    
    constructor(id:string,name:string){
        this.id= id;
        this.name = name;
    }

    addstudent(students:Student){
        this.students.push(students)
        students.registerforcourses(this)
    }
    
    setInstructor(instructor:Instructor){
        this.instructor = instructor
        instructor.assignCourse(this)
    }
}

class Department{
    name:string;
    courses:Course[] = [];
    constructor(name:string){
        this.name = name;
    }
    addCourse(course:Course){
        this.courses.push(course)
    }
}

let std1 = new Student("Kmail",12);
let std2 = new Student("Ahsna", 56)

const Instructor1 = new Instructor("Zia",42,100000);
const Instructor2 = new Instructor("Okasha",22,100000);

let course1 = new Course("course1", "Metaverse")
let course2 = new Course("course2", "BlockChain")
course1.addstudent(std1);
course1.addstudent(std2)
course1.setInstructor(Instructor1)
course2.setInstructor(Instructor2)

let dep1 = new Department("Computer Science")
dep1.addCourse(course1);
dep1.addCourse(course2)
console.log(dep1)


export let addstudent = (val:Student) => {
        val.getname()
        console.log(this)
}

// console.log(Instructor1.courses);

export{Person,Student,Instructor,Department,Course}