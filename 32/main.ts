//create an array::
let current_users = ["Hassan", "Asif", "Umair", "zahid", "Abdullah"]

//array for our new User::
let new_users = ["Ghuffran", "Omer", "Zahid", "Zeeshan", "Abid"]

//loop for checking usernames avaiblity
new_users.forEach(new_one_user => {
    //create a condition for username already exist::
    let our_condition =current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())
    //if - else satement::
    if(our_condition){
        console.log(`sorry ${new_one_user} is already taken!`)
    }else{
        console.log(`this User name ${new_one_user} is already avaiable`)
    }
})