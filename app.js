// -------------------------------------- Question 1 -------------------------------------

// function fibonacci(num) {
//     let a = 0;
//     let b = 1;
//     if (num == undefined) {
//         return;
//     } else {
//         console.log(a);
//     }

//     for (let i = 0; i < num; i++) {
//         let next = a + b;
//         if (next > num) {
//             return;
//         }
//         console.log(next);
//         a = b;
//         b = next;
//     }
// }

// fibonacci(10);



// -------------------------------------- Question 2 -------------------------------------

// function validatePassword(password) {

//     let regex = /^(?=[A-Z])(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@!^$%&*+=#])(?=\S+$).{6,14}$/;
//     if(!regex.test(password)){
//         console.log("Password is not valid");
//     }else{
//         console.log("Password is valid");
//     }

// }

// validatePassword("Test@123");
// validatePassword("Test123|");



// -------------------------------------- Question 3 -------------------------------------

// function closurePrivateCounter() {
//     let counter = 0;

//     function innerfunc() {
//         counter++;
//         return counter;
//     }

//     return innerfunc;
// }

// let add = closurePrivateCounter();

// console.log(add())
// console.log(add())
// console.log(add())



// -------------------------------------- Question 4 -------------------------------------

// const data = [
//     { name: 'John', age: 30 },
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 35 },
// ]

// function sortFunc(data) {

//     let newArray = data.toSorted((obj1, obj2) => {
//         return obj1.age - obj2.age;
//     });

//     return newArray;
// }


// console.log(sortFunc(data));




// -------------------------------------- Question 5 -------------------------------------

// function divideIntoChunk(arr, input) {
//     let finalArr = [];
//     for (let i = 0; i < arr.length - 1; i++) {
//         let newAarray = [];
//         while (input > 0) {
//             newAarray.push(arr[i])
//             input--;
//         }
//         finalArr.push(newAarray);
//     };
//     return finalArr;
// }

// const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let input = 3;
// console.log(divid
// eIntoChunk(data, input));




// -------------------------------------- Question 6 -------------------------------------

// function maxNumber(arr) {
//     let newArr = arr.flat().flat();
//     console.log(newArr)
//     // let maxNumber = Math.max.apply(this,newArr);
//     let max = -Infinity;
//     for (let i = 0; i < newArr.length; i++) {
//         if (newArr[i] > max) {
//             max = newArr[i];
//         }
//     }
//     // return maxNumber;
//     return max;
// }

// let arr = [2, 4, 10, [12, 4, [100, 99], 4], [3, 2, 99], 0];
// console.log(maxNumber(arr));





// -------------------------------------- Question 7 -------------------------------------

// class Employee {
//     constructor() {
//         this.employees = [];
//     }

//     AddEmployee(firstName, lastName, mobileNumber, email, salary, address) {
//         const id = this.employees.length > 0 ? this.employees[this.employees.length - 1].id + 1 : 1
//         const newEmp = { id, firstName, lastName, mobileNumber, email, salary, address };
//         this.employees.push(newEmp);
//         console.log(`Employee Added: ${JSON.stringify(newEmp)}`);
//         this.printEmployeeDetails();
//     }

//     printEmployeeDetails() {
//         if (this.employees.length > 0) {
//             console.log("All Employee Details:")
//             this.employees.forEach(emp => {
//                 console.log(`id: ${emp.id}, firstName: ${emp.firstName}, lastName: ${emp.lastName}, mobileNumber: ${emp.mobileNumber}, email: ${emp.email}, salary: ${emp.salary}, address: ${JSON.stringify(emp.address)}`);
//             })
//         } else {
//             console.log("Not present any Employee");
//         }
//     }

//     updateEmployee(id, newFirstName, newLastName, newMobileNumber, newEmail, newSalary, newAddress) {
//         const emp = this.employees.find(emp => emp.id === id);
//         if (emp) {
//             emp.firstName = newFirstName || emp.firstName;
//             emp.lastName = newLastName || emp.lastName;
//             emp.mobileNumber = newMobileNumber || emp.mobileNumber;
//             emp.email = newEmail || emp.email;
//             emp.salary = newSalary || emp.salary;
//             emp.address = newAddress || emp.address;
//             console.log(`Employee with id: ${emp.id} is updated`);
//             console.log(`Updated Emplyee`);
//             console.log(`id: ${emp.id}, firstName: ${emp.firstName}, lastName: ${emp.lastName}, mobileNumber: ${emp.mobileNumber}, email: ${emp.email}, salary: ${emp.salary}, address: ${JSON.stringify(emp.address)}`);
//             this.printEmployeeDetails();
//         } else {
//             console.log(`Employee with id:${emp.id} Not Found`);
//         }
//     }

//     deleteEmployee(id) {
//         const empIndex = this.employees.findIndex(emp => emp.id === id);
//         if (empIndex !== -1) {
//             let removedEmp = this.employees.splice(empIndex, 1);
//             console.log(`Employee with id:${id} is deleted`);
//             this.printEmployeeDetails();
//         } else {
//             console.log(`Employee with id: ${id} Not Found`);
//         }
//     }
// }

// const emp = new Employee();

// emp.AddEmployee("meet", "roy", 3947586781, "meet@gmail.com", "100000",
//     {
//         line1: "55",
//         line2: "Rajhans Residency",
//         area: "chikuwadi",
//         pincode: 394899,
//         city: "surat",
//         state: "Gujarat"
//     });
// emp.AddEmployee("rohit", "ramani", 3947586781, "rohit@gmail.com", "100000",
//     {
//         line1: "55",
//         line2: "Rajhans Residency",
//         area: "chikuwadi",
//         pincode: 394899,
//         city: "banglore",
//         state: "Gujarat"
//     });
// emp.AddEmployee("kehul", "sali", 3947586781, "kehul@gmail.com", "50000",
//     {
//         line1: "55",
//         line2: "Rajhans Residency",
//         area: "chikuwadi",
//         pincode: 394899,
//         city: "mumbai",
//         state: "Gujarat"
//     });

// emp.updateEmployee(1, "prit", "kanani", 2904785786,"prit@gmail.com","20000",
//     {
//         line1: "300",
//         line2: "Pritam Residency",
//         area: "adajan",
//         pincode: 394899,
//         city: "surat",
//         state: "Gujarat"
//     }
// );

// emp.deleteEmployee(3);
// emp.deleteEmployee(3);





// -------------------------------------- Question 8 -------------------------------------

// function objToArray(obj){
//     let newArray = [];
//     for(let [key,val] of Object.entries(obj)){
//         newArray.push([key,val]);
//     }
//     return newArray;
// }

// let obj =  {name: 'sid', age: 24};

// console.log(objToArray(obj));





// -------------------------------------- Question 9 -------------------------------------

// function getType(val) {

//     if (typeof val !== "object") {
//         return typeof val;
//     } else {
//         if (Object.prototype.toString.call(val) === "[object Array]") {
//             return "Array";
//         } else if (Object.prototype.toString.call(val) === "[object Object]") {
//             return "Object";
//         }else if (Object.prototype.toString.call(val) === "[object Set]") {
//             return "Set";
//         }else if (Object.prototype.toString.call(val) === "[object Map]") {
//             return "Map";
//         }
//     }
// }

// console.log(getType());





// -------------------------------------- Question 10 -------------------------------------

// function checkUsernameAvailable(usernames, username) {

//     if (usernames.includes(username)) {
//         console.log(`username is found at position: ${(usernames.indexOf(username) + 1)}`);

//         for (let i = 0; i < usernames.indexOf(username); i++) {
//             console.log(usernames[i]);
//         }
//     }else{
//         console.log(`username: ${username} not found`);
//     }
// }

// const usernames = ["meet", "prit", "rohit", "virat", "ruturaj", "shubhman", "jaiswal", "dhoni", "iyer", "romil", "rudra", "priyank", "harsh", "krunal", "kenil"];

// checkUsernameAvailable(usernames, "KENIL");