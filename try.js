const caesarEncode = (phrase, shift) =>
  phrase.split(' ').map((word, i) =>
    word.split('').reduce((newWord, leter) => {
      const key = leter.charCodeAt() + (shift + i) % 26;
      return newWord + String.fromCharCode(key > 122 ? key - 26 : key )
    },'')
  ).join(' ');
