// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.


function isPangram(string){
    let alphabet = "abcdefghijklmnopqrstuvwxyz",
        regex = /\s/g,
        lower = string.toLowerCase().replace(regex, "")
    for(let i = 0 ; i < alphabet.length ; i++){
      if(lower.indexOf(alphabet[i]) === -1){
        return false
      }
    }
    return true
  }