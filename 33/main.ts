// creat an array::
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

//For-loop::
for(let oneNumber of numbers){
    let ordinalEnding: string;
    
    if(oneNumber === 1){
        ordinalEnding = "st"
    }else if(oneNumber === 2){
        ordinalEnding = "nd"
    }else if(oneNumber === 3){
        ordinalEnding = "rd"
    }else if(oneNumber === 4){
        ordinalEnding = "th"
    }else{
        ordinalEnding = "th"
    }

    console.log(`${oneNumber}${ordinalEnding}`);
}