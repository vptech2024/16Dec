// object literal : {}

let obj1 = {
    'fname':'Vindesh',
    'lname' : 'kori',
    'age' : 25
}

let obj2 = {
    fname:'Ami',
    lname : 'kori',
    age : '22'
}

console.log(obj1.fname);
console.log(obj2.fname);
console.log(obj1.age);
console.log(obj2.age);
console.log(typeof obj1)
//2. constructor Functions:

function Car(brand,model,price){
    this.brand = brand;
    this.model = model;
    this.price = price;

}

let c1 = new Car('BMW','X5',45000);
let c2 = new Car('Audi','Q6',66000);
console.log(c1.price + ": Price, of brand " + c1.brand +" of " +c1.model)
console.log(c2.price + ": Price, of brand " + c2.brand +" of " +c2.model)

//3. Class Style:

class Customer{
    constructor(fname,lname,age){
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    }

    display(){
        console.log(this.fname + " " + this.lname + " " + this.age);
        console.log(`${this.fname} is Fname, is LName ${this.lname}, ${this.age}`);
    }
}

//instance of class:

let c3 = new Customer('Vindesh','kori',25);
console.log(c3.fname)
c3.display();

// 4. Object.create(): with some prototype object.

let empProtoType = {
    Printinfo:function (){
        console.log(`Hello, emp name is ${this.name}`);
    },


};

const e1 = Object.create(empProtoType);
e1.name = "AMI";
e1.Printinfo();

//5. using Factory Fuctions : returns an object
function createDepartment(deptName,HOD){
    return{
        deptName : deptName,
        HOD : HOD,

        showInfo:function(){
            console.log(`Hello Dept name is ${this.deptName} hod is ${this.HOD}`)
        }
    }
}
const dept1 = createDepartment("IT","Vindesh");
const dept2 = createDepartment("QA","Ami");

dept1.showInfo();
dept2.showInfo();
console.log(dept1.deptName + " " + dept1.HOD); 

// let d1 = createDepartment("IT","Vindesh");
// console.log(d1.deptName + " " + d1.HOD); 
