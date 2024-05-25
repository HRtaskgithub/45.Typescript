let guestList = ["umair", "uzair", "haris", "hasnain"];

let dontCome = guestList[0];

console.log(dontCome, "wouldn't be able to come");

guestList.splice(0, 1, "M.Omer");

guestList.forEach(guest => console.log(`Salam ${guest}, Would u like to Dinner with me?`));