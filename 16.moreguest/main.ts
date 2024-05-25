let guestList = ["umair", "uzair", "haris", "hasnain"];

let dontcome = guestList[0];

console.log(dontcome, "Wo Nahi asaktey hen ");

guestList.splice(0, 1, "Amirr");

console.log("Good News! We have Found a Bigger Table For Dinner.");

guestList.unshift("Arshad");

guestList.push("Zahid");

let middleIndex: number = Math.floor(guestList.length / 2);
            
guestList.splice(middleIndex, 0, "Wahid");

console.log("Updated list of our Guests");

guestList.forEach(oneguest => console.log(`Hi ${oneguest}, Would you like to dinner with me`));