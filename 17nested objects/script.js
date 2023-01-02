let User = {    //parent object
    id : 101,
    email : "abc@gmail.com",

    personalInfo :{    //nested object 1
        fname : "Mudasir",
        lname : "Bashir",
        address : {         //nested object 2
            country: "Pakistan",
            city : "Shujabad"
        }
    }
}

console.log(User);
// console.log(User.personalInfo);
// console.log(User.personalInfo.address);
// console.log(User.personalInfo.lname);
// console.log(User.personalInfo.address.city);



//this function is used mostly in Json