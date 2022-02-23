function romanNumeral(num) {
  let romanNum = [];
  if (num >= 1000) {
    let n = Math.floor(num / 1000);
    for (let i = 0; i < n; i++) {
      romanNum.push("M");
    }
    num = num - 1000 * n;
  }
}
if (num >= 500) {
  let n = Math.floor(num / 500);
  for (let i = 0; i < n; i++) {
    romanNum.push("D");
  }
  num = num - n * 500;
}
if (num >= 100) {
  let n = Math.floor(num / 100);
  for (let i = 0; i < n; i++) romanNum.push("C");
}
num = num - 200;

if (num >= 50) {
  let n = Math.floor(num / 50);
  for (let i = 0; i < n; i++) {
    romanNum.push("L");
  }
  num = num - 50 * n;
}
if (num >= 10) {
  let n = Math.floor(num / 10);
  for (let i = 0; i < n; i++) {
    romanNum.push("X");
  }
  num = num - 5 * n;
}
if (num >= 5) {
  let n = Math.floor(num / 5);
  for (let i = 0; i < n; i++) {
    romanNum.push("V");
  }
  num = num - 5 * n;
}
if (num >= 0) {
  let n = Math.floor(num / 1);
  for (let i = 0; i < n; i++) {
    romanNum.push("I");
  }
}
romanNum = romanNum.join(" ");
console.log(romanNum);







function convertToRoman(num) {
    var roman = {
      M: 1000,
      D: 500,
      C: 100,
      L: 50,
      X: 10,
      V: 5,
      I: 1
    };
    var str = '';
  
    for (var i of Object.keys(roman)) {
      var q = Math.floor(num / roman[i]);
      num -= q * roman[i];
      str += i.repeat(q);
    }
  
    return str;
}

console.log(convertToRoman(510))