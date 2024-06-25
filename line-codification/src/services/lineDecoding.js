function decodeHdb3(encodedString) {
  let binaryList = new Array(encodedString.length).fill('');
  let lastPolarity = null;

  for (let i = 0; i < encodedString.length; i++) {
    let char = encodedString[i];
    // '+' or '-' char
    if (char !== '0') {
      // repeated polarity == 4 zeros sequence
      if (char === lastPolarity) {
        // detect B00V type sequence
        if (binaryList[i - 3] !== '0') {
          binaryList[i - 3] = '0';
        }
        // 000V type sequence
        binaryList[i] = '0';
      } else {
        binaryList[i] = '1';
      }
      lastPolarity = char;
    } else {
      binaryList[i] = '0';
    }
  }

  return binaryList.join('');
}

function binaryToAscii(message) {
  let asciiList = [];
  for (let i = 0; i < message.length; i += 8) {
    asciiList.push(String.fromCharCode(parseInt(message.substr(i, 8), 2)));
  }
  return asciiList.join('');
}

export {
  decodeHdb3,
  binaryToAscii
}