var guestList = ["umair", "uzair", "haris", "hasnain"];
var dontcome = guestList[0];
console.log(dontcome, "Wo Nahi asaktey hen");
guestList.splice(0, 1, "Amirr");
console.log("\nGood News! We have Found a Bigger Table For Dinner.\n");
guestList.unshift("Arshad");
guestList.push("Zahid");
var middleIndex = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, "Wahid");
console.log("Updated list of our Guests\n");
guestList.forEach(function (oneguest) { return console.log("Hi ".concat(oneguest, ", Would you like to dinner with me")); });
console.log("\nunfortunately, the new dinner table wont arrive on time, so I can only invite two guests for dinner with me\n");
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("Sorry, ".concat(removedGuest, " I can't invite you to dinner"));
}
console.log("\nIvitation to the last two Guests \n");
guestList.forEach(function (twoguest) { return console.log("Luckly ".concat(twoguest, ", You are still invited to dinner ")); });
guestList.pop();
guestList.pop();
console.log("\nEmpty List:", guestList);
