function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function makes_great(magicians) {
    return magicians.map(function (name) { return "the great ".concat(name); });
}
var magicians_names = ["harry", "Joker", "petter"];
var copy_magicians_names = magicians_names.slice();
var copy_great_magicians = makes_great(copy_magicians_names);
console.log("original array");
show_magicians(magicians_names);
console.log("\ncoppied array");
show_magicians(copy_great_magicians);
