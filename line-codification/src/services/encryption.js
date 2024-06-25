function caesarEncrypt(text, shift) {
  let result = "";

  for (let char of text) {
      if (char.charCodeAt(0) >= 32 && char.charCodeAt(0) <= 126) {
          let encryptedChar = String.fromCharCode((char.charCodeAt(0) + shift) % 256);
          result += encryptedChar;
      } else {
          result += char;
      }
  }

  return result;
}

function caesarDecrypt(text, shift) {
  let result = "";
  
  for (let char of text) {
      if (char.charCodeAt(0) >= 32 && char.charCodeAt(0) <= 126) {
          let decryptedChar = String.fromCharCode((char.charCodeAt(0) - shift + 256) % 256);
          result += decryptedChar;
      } else {
          result += char;
      }
  }

  return result;
}

export {
  caesarEncrypt,
  caesarDecrypt
}