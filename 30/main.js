//create an array::
var UserNames = ["omer", "Maaz", "Admin", "Jazim", "Usama"];
//using of forEach loop ::
UserNames.forEach(function (Userone) {
    if (Userone === "Admin") {
        console.log("Hello ".concat(Userone, ", would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(Userone, ", thankyou for logging in again"));
    }
});
