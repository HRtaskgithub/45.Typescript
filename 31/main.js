//create an array::
var UserNames = ["omer", "Maaz", "Admin", "Jazim", "Usama"];
UserNames = [];
if (UserNames.length === 0) {
    console.log("Your Array in empty we need to find some Users! ");
}
else {
    UserNames.forEach(function (Userone) {
        if (Userone === "Admin") {
            console.log("Hello ".concat(Userone, ", would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(Userone, ", thankyou for logging in again"));
        }
    });
}
