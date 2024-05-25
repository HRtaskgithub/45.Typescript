function makeBurger() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a Burger with the following items: \n");
    items.forEach(function (singleItems) { return console.log(singleItems); });
    console.log("\nNow Enjoy Burger");
}
makeBurger("Chicken", "Mayo", "Chesse", "Egg");
makeBurger("bread", "Butter");
makeBurger("bread", "butter", "Mayo", "Egg", "Chesse", "Tomatoes");
