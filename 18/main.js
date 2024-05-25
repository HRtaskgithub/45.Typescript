var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//making array and print its original order:
var countriesTovisit = ["China", "Denmark", "Brazil", "Afghanistan"];
console.log("Original Order:", countriesTovisit);
//print this array in alphabetical order without modify actual list:
console.log("Alphabetical Order:", __spreadArray([], countriesTovisit, true).sort());
//show array in Original order:
console.log("Still in Original Order:", countriesTovisit);
//print array in reverse order:
console.log("Revrse Order:", __spreadArray([], countriesTovisit, true).reverse());
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
