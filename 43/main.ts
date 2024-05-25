function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

function makes_great(magicians:string[]){
    return magicians.map(name => `the great ${name}`);
}

let magicians_names = ["harry", "Joker", "petter"];

let copy_magicians_names = magicians_names.slice();

let copy_great_magicians = makes_great(copy_magicians_names);

console.log("original array")
show_magicians(magicians_names);

console.log("\ncoppied array")
show_magicians(copy_great_magicians);