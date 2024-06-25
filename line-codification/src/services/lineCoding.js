function encodeAscii(string) {
  let stringAscii = new Array(string.length);

  for (let i = 0; i < string.length; i++) {
    stringAscii[i] = string.charCodeAt(i);
  }

  return stringAscii;
}

function encodeBinary(string) {
  let stringAscii = encodeAscii(string);
  let binList = new Array(stringAscii.length);

  for (let i = 0; i < stringAscii.length; i++) {
    binList[i] = stringAscii[i].toString(2).padStart(8, '0');
  }

  return binList.join('');
}

function opposite(polarity) {
  return polarity === '+' ? '-' : '+';
}

function encodeHdb3(bitsString) {
  let nextPolarity = '+';
  let onesCount = 0;
  let consecutiveZeros = 0;
  let encodedList = new Array(bitsString.length);

  for (let i = 0; i < bitsString.length; i++) {
    let bit = bitsString[i];
    if (bit === '1') {
      onesCount++;
      consecutiveZeros = 0;
      encodedList[i] = nextPolarity;
      nextPolarity = opposite(nextPolarity);
    } else {
      consecutiveZeros++;
      if (consecutiveZeros === 4) {
        consecutiveZeros = 0;
        if (onesCount % 2 === 0) {
          encodedList[i - 3] = nextPolarity;
          encodedList[i] = nextPolarity;
          nextPolarity = opposite(nextPolarity);
        } else {
          encodedList[i] = opposite(nextPolarity);
        }
        onesCount = 0;
      } else {
        encodedList[i] = '0';
      }
    }
  }

  return encodedList.join('');
}

function encodedToSignal(message) {
  let signal = new Array(message.length);
  for (let i = 0; i < message.length; i++) {
    let char = message[i];
    if (char === '+') {
      signal[i] = 1;
    } else if (char === '-') {
      signal[i] = -1;
    } else {
      signal[i] = 0;
    }
  }
  return signal;
}

export {
  encodeBinary,
  encodeHdb3,
  encodedToSignal,
  encodeAscii
}