function countLetters(input) {
  var output = {}
  var x = []
  for(i = 0; i < input.length; i += 1) {
    var char = input[i]
  if(char !== " ") {
    if(output[char] === undefined ) {
      output[char] = []
    }

      output[char].push(i)
}
  }
  return output
}

console.log(countLetters("lighthouse in the house"))


