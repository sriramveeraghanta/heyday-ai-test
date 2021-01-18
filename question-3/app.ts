var words: string[] = ["rater", "rotor"];

function isPalindrome(word: string): boolean {
  return word === word.split("").reverse().join("");
}

for (let index in words) {
  if (isPalindrome(words[index])) {
    console.log(words[index]);
  }
}
