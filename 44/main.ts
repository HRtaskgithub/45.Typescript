function makeBurger(...items: string[]){
    console.log("Making a Burger with the following items: \n")
    items.forEach(singleItems => console.log(singleItems));

    console.log("\nNow Enjoy Burger");
}

makeBurger("Chicken", "Mayo", "Chesse", "Egg");

makeBurger("bread", "Butter");

makeBurger("bread", "butter", "Mayo", "Egg", "Chesse", "Tomatoes");
