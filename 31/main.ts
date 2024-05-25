//create an array::
let  UserNames =["omer", "Maaz", "Admin", "Jazim", "Usama"];

//empty the  array::
UserNames =[]

//is statement for checking length::
if(UserNames.length === 0){
    console.log("Your Array in empty we need to find some Users! ")
}else{     
UserNames.forEach(Userone =>{
    if(Userone === "Admin"){
        console.log(`Hello ${Userone}, would you like to see a status report?`)
    }else{
        console.log(`Hello ${Userone}, thankyou for logging in again`)
    }
})
}












