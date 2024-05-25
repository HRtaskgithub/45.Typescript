function make_shirt (size: string = "large", printMessage: string = "I Love Typescript"){
    console.log(`Creating a ${size} shirt with the ${printMessage} prints on shirt`)
}

make_shirt();

make_shirt("medium ")

make_shirt("small", "I love JS")