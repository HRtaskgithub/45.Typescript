var personName = "Muhammad Hassan";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(personName.replace(/\b\w/g, function (admi) { return admi.toUpperCase(); }));
