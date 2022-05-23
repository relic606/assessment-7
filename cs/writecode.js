// 1 - Sum Zero

function addToZero (arr) {
    if (arr.length <= 1) {
        console.log('False')
        return false
    }
    for (i = 0; i < arr.length-1; i++){
        for (j = i + 1; j < arr.length; j++){
            // console.log(arr[i] + arr[j])
            let sum = arr[i] + arr[j]
            if (sum === 0){
                console.log('True')
                return true
            }
            else if (sum !== 0 && i === arr.length-2){
                console.log('False')
                return false
            }
        }
    }
 
}

// addToZero([]);// -> False
// addToZero([1]);// -> False
// addToZero([1, 2, 3]);// -> False
// addToZero([1, 2, 3, -2]);// -> True

// This function has an O(n^2) due to the nested for loops

// 2 - Unique Characters

function hasUniqueChars (str) {
    let strToArray = str.toLowerCase().split('')
    if (strToArray.length <= 1){
        console.log('true')
        return true
    }
    else{ 
        for (i = 0; i < strToArray.length-1 ; i++){
            for (j = i + 1 ; j < strToArray.length; j++){
                if (strToArray[i] === strToArray[j]){
                    console.log('false')
                    return false
                }
                else if(strToArray[i] !== strToArray[j] && i === strToArray.length -2){
                    console.log('true')
                    return true
                }

            }
    }

    }
}

// hasUniqueChars('s')
// hasUniqueChars('ss')
// hasUniqueChars('andy')
// hasUniqueChars('Omonday')

// This function will also have a O(n^2) runtime due to the nested for loops over an n sized array

// 3 - Pangram Sentence

function isPangram(str){
    let formatStr = str.toLowerCase().trim().replace(/\s/g, "")
    const alpha = ['a','b','c','d','e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    // console.log(formatStr)
    // console.log(alpha.length)
    // console.log(formatStr.indexOf('a'))

    for (i = 0; i < alpha.length; i++){

        if(formatStr.indexOf(alpha[i]) === -1){
            console.log(`First alphabetical character missing is ${alpha[i]}`)
            console.log('False')
            return false
        } 
        if (i === alpha.length - 1 && formatStr.indexOf(alpha[i]) !== -1){
            console.log('True')
            return true
        }
    }
   
}

let test = 'The quick brown fox jumps over the lazy dog'
let testTwo = 'a b c d e f g h i j k l m n o p q r s t u v w x y'
// isPangram(testTwo)

// This function has O(n) runtime.  Although we cycle through alpha array as well, it only has a finite number of elements, so the run time will depend on how long is the string

// 4 - Longest Word

function findLongestWord(arr){
    let longestWord = ''
    let longestWordLength = 0
    for (i = 0; i < arr.length; i++){
        if (arr[i].length > longestWordLength){
            longestWord = arr[i]
            longestWordLength = arr[i].length
        }
    }
    console.log(`The longest word is ${longestWord}, which has a length of ${longestWordLength} characters`)
    return longestWordLength
}

// findLongestWord(["asdfasdfasdfasfd","hi", "hello", 'heeeeeelllo'])

// This function has O(n) runtime, as we will need to cycle through the entire array of size n once to determine which index has the largest string