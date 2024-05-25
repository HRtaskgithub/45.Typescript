var guestList = ["umair", "uzair", "haris", "hasnain"];
var dontCome = guestList[0];
console.log(dontCome, "wouldn't be able to come");
guestList.splice(0, 1, "M.Omer");
guestList.forEach(function (guest) { return console.log("Salam ".concat(guest, ", Would u like to Dinner with me?")); });
