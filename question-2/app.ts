const vowels = ["a", "e", "i", "o", "u"];

const checkWord = (word: string): boolean => {
  const lowerCaseWord = word.toLowerCase();
  let isStartWithVowel = false;
  vowels.forEach((vowel) => {
    if (!isStartWithVowel) {
      isStartWithVowel = lowerCaseWord.startsWith(vowel);
    }
  });

  return isStartWithVowel && lowerCaseWord.endsWith(lowerCaseWord[0]);
};

console.log(checkWord("elle"));
