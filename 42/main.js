function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function makes_great(magicians) {
    magicians.map(function (name) { return "The great ".concat(name); });
    return magicians.map(function (name) { return "the great ".concat(name); });
}
var magician_names = ["harry", "Joker", "petter"];
var great_magicians = makes_great(magician_names);
show_magicians(great_magicians);
