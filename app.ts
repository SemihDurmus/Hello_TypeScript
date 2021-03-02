console.log("Hello TypeScript");

//-------------------------------

// function add(num1:number, num2:number, showResult:boolean, phrase:string) {
//     //  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
//     //    throw new Error ('Incorrect input')
//     //   }
//       const res = num1 + num2
//       if (showResult) {console.log (phrase + res) }
//       else {return res}    
//     }
    
//     const nr1 = 5;
//     const nr2 = 2.8;
//     const printResult = true;
//     const resultPhrase = "Result is "
    
//     add(nr1, nr2, printResult, resultPhrase)

//---------Object Type----------------------

// const student : object = {
//     name : "Max",
//     age : 20
//   }
  
//   const person : {
//     name : string
//     age : number
//   } = {
//     name : "Rex",
//     age : 30
//   }
  
//   console.log(person.name)

  //-----------Array Type--------------------

// let favActivites : string[];
// favActivites = ["music", "movie"]

// let favs : any[];
// favs = [3, "movie"]

// const boys = {
//   name : "Mike",
//   age : 10,
//   hobbies : ['run','dive' ]
// }

// for (const hobby of boys.hobbies) {
//   console.log(hobby.toUpperCase())
//   //console.log(hobby.map()) //Error ! Because an srray does not get map
// }

  //-------Tuple--------------------
//   const person33 : {
//     name : string,
//     role : [number, string] //this describes a tuple
//     name : "Rex",
//     role : [1, 'author'] //Should contain only 2 elements, one number and one string
//   }
  
//   person33.role.push('admin') //Error
//   person33.role[1] = 3  //Error

//--------------ENUM--------------------

// // const ADMIN = 0;
// // const READ_ONLY = 1;
// // const AUTHOR = 2;
// enum Role {ADMIN, READ_ONLY, AUTHOR, OTHER="READER"};
// //You do not have to start w 0 => enum Role {ADMIN=5, READ_ONLY, AUTHOR} =>the others are 6 and 7 now
// //Can also use differnet types => enum Role {ADMIN="ADMIN", READ_ONLY=100, AUTHOR=200}

// const person34 = {
//   name : 'Max',
//   hobbies : ["run", "music", "jump"],
// //   role : 2
//   role1 : Role.AUTHOR,
//   role2 : Role.OTHER
// }

// if (person34.role1 === 2) {
//   console.log(person34.name);
//   console.log("is author");
// }

// console.log(person34.role1);
// console.log(person34.role2);

//-----ANY TYPE-----------------
// let i1 : number | string;
// let i2 : any;
// let iArray : any[];

// type Combineable = number | string;
// type ConversionDescriptor = "as-number" | "as-text" 

// function combine (
//   input1 : Combineable,
//   input2 : number | string,
//   resultConversion : "as-number" | "as-text"    //literal type
//   //resultConversion :ConversionDescriptor
// ) {
//   let result;
//   if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === "as-number") {
//       result = +input1 + +input2;
//       console.log(result)
//   } else {
//        result = input1.toString() + input2.toString()
//        console.log(result)
//   }
//   return result
// }  
  
// combine(30,26,"as-number"); //56
// combine("30","26","as-number"); //56
// combine("Max","Anna","as-text"); //MaxAnna

//-----------VOID,UNDEFINED,FUNCTION TYPES-----------

// function printResult1(num:number): undefined {
//     console.log('Result '+ num)
//     return
//   }
  
//   printResult1(1);
//   //void is the general use for functions that does not return anything => console will give undefined
//   function printResult2(num:number):void {
//     console.log('Result '+ num)
//   }
//   printResult2(2);
  
//   function add(n1:number, n2:number) { 
//       return n1 + n2 
//     }
  
//   let combineValues1 : Function;
  
//   combineValues1 = add;
//   //combineValues = 5; //Error
  
//   //if we combineValues = printResult; TS will not complain. But we dont want that.
//   //So we should re-define it
  
//   let combineValues2 : (a:number, b:number)=> number

//---------------------------------------

// function addAndHandle (n1:number, n2:number, cb:(num:number)=> void){
//   const result = n1 + n2
//   cb(result)
// }

// addAndHandle(10, 20, (result)=>{console.log(result)}); //30

//----------------------------------------
// let userInput : unknown;
// let userName : string;

// userInput = 4;
// userName = "John";
// //userName = userInput //Error

//----------------------------------------
// function generateError(message:string, code:number):never {
//   throw {message:message, errorCode:code}
// }

// const errResult = generateError("An error has occured", 400);
// console.log(errResult) 
// //Gives nothing. No null, no undefined but nothing. Therefore we add the type never to func.
// //void is another opt we could use, but never describes it better