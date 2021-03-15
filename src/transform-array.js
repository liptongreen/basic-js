const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw "Error";

  let a = [];
  for (let i = 0; i < arr.length; i += 1) {
    switch (arr[i]) {
      case "--discard-next":
        i=i + 1;
        break;
      case "--double-next":
        if (i !== arr.length - 1) {
          a.push(arr[i + 1]);
        }
        break;
      case "--discard-prev":
        if (a.length !== 0 && arr[i - 2] !== '--discard-next') a.pop()
        break;
      case "--double-prev":
        if (a.length !== 0 && arr[i - 2] !== '--discard-next') a.push(arr[i - 1]);
        break;

      default:
        a.push(arr[i]);
    }
  }
  return a;
}
