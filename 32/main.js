//create an array::
var current_users = ["Hassan", "Asif", "Umair", "zahid", "Abdullah"];
//array for our new User::
var new_users = ["Ghuffran", "Omer", "Zahid", "Zeeshan", "Abid"];
//loop for checking usernames avaiblity
new_users.forEach(function (new_one_user) {
    //create a condition for username already exist::
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    //if - else satement::
    if (our_condition) {
        console.log("sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("this User name ".concat(new_one_user, " is already avaiable"));
    }
});
