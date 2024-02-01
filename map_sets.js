// Quick Question #1
new Set([1,1,2,2,3,4]) //{1,2,3,4}



// Quick Question #2
[...new Set("referee")].join("") //"ref"



// Quick Questions #3
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
// 0: {Array(3) => true}
// 1: {Arrat(3) => false}



//hasDuplicate
// hasDuplicate([1,3,2,1]) // true
// hasDuplicate([1,5,-1,4]) // false
const hasDuplicate = arr => new Set(arr).size !== arr.length();


// vowelCount
// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.
function isVowel(char){
    return "aeiou".includes(char);
}

function vowelCount(str){
    const vowelCheck = new Map();
    for(let char of str){
        let lowerCased = char.toLowerCase();
        if(isVowel(lowerCased)){
            if(vowelCheck.has(lowerCased))
                vowelCheck.set(lowerCased, vowelCheck.get(lowerCased) + 1);
            else
                vowelCheck.set(lowerCased, 1);
        }
    }
    return vowelCheck;
}