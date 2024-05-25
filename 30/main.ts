//create an array::
let  UserNames =["omer", "Maaz", "Admin", "Jazim", "Usama"];

//using of forEach loop ::
UserNames.forEach(Userone =>{
    if(Userone === "Admin"){
        console.log(`Hello ${Userone}, would you like to see a status report?`)
    }else{
        console.log(`Hello ${Userone}, thankyou for logging in again`)
    }
})