//making array and print its original order:
let countriesTovisit : string[] = ["China", "Denmark", "Brazil", "Afghanistan"];
console.log("Original Order:",countriesTovisit);

//print this array in alphabetical order without modify actual list:
console.log("Alphabetical Order:", [...countriesTovisit].sort());

//show array in Original order:
console.log("Still in Original Order:", countriesTovisit);

//print array in reverse order:
console.log("Revrse Order:", [...countriesTovisit].reverse());

//show array in Original order:
console.log("Still in Original Order:", countriesTovisit);

//I change the order in original condition:
console.log("Original Array Reverse:", countriesTovisit.reverse());

//print array to back its original order:
console.log("Back to original order:", countriesTovisit.reverse());

//print array to changed the order in alphabetical order:
console.log("Sorted in the Alphabetical Order:", countriesTovisit.sort());

//I change the order again in original condition into revrse order:
console.log("Original Array Reverse:", countriesTovisit.reverse());