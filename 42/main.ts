function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

function makes_great(magicians:string[]){
    magicians.map(name => `The great ${name}`);
    return magicians.map(name => `the great ${name}`)
}

let magician_names = ["harry", "Joker", "petter"]

let great_magicians = makes_great(magician_names);

show_magicians(great_magicians);