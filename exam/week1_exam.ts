// Remove the spaces found in a string without using built-in function
const removeSpaces = (input:string):string => {
  const cleanedInput = input.split('').map(char => {
    if (char ===' ') {
      return ''
    }
    return char
  })
  return cleanedInput.join('')
}

console.log(removeSpaces('hello world'))
console.log(removeSpaces(' abcdefghij '))

// Return the number of vowels in a string.
function returnVowels(str: string): number {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  let count = 0
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++
    }
  }
  return count
}

console.log(`Number of vowels of helllo world are: ${returnVowels('hello world')}`)
console.log(`Number of vowels o abcdefghij are: ${returnVowels(' abcdefghij ')}`)

// Create a function that filters out negative numbers
function filtersOutNegativeNumbers(input: Array<number>): Array<number> {
  return input.filter((ele) => ele >= 0)
}

console.log(`[-1,0,2,-10] -> ${filtersOutNegativeNumbers([-1,0,2,-10])}`)
console.log(`[18,-50,98,-200] -> ${filtersOutNegativeNumbers([18,-50,98,-200])}`)
