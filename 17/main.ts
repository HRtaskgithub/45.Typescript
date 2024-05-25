let guestList = ["umair", "uzair", "haris", "hasnain"];

let dontcome = guestList[0];

console.log(dontcome, "Wo Nahi asaktey hen");

guestList.splice(0, 1, "Amirr");

console.log("\nGood News! We have Found a Bigger Table For Dinner.\n");

guestList.unshift("Arshad");

guestList.push("Zahid");

let middleIndex: number = Math.floor(guestList.length / 2);
            
guestList.splice(middleIndex, 0, "Wahid");

console.log("Updated list of our Guests\n");

guestList.forEach(oneguest => console.log(`Hi ${oneguest}, Would you like to dinner with me`));

console.log("\nunfortunately, the new dinner table wont arrive on time, so I can only invite two guests for dinner with me\n");

while(guestList.length > 2){
    let removedGuest = guestList.pop();
    console.log(`Sorry, ${removedGuest} I can't invite you to dinner`);         
}

console.log("\nIvitation to the last two Guests \n");
guestList.forEach(twoguest => console.log(`Luckly ${twoguest}, You are still invited to dinner `));

guestList.pop();
guestList.pop();

console.log("\nEmpty List:",guestList );