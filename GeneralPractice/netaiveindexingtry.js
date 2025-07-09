let arr = [1, 2, 3, 4, 5];

function negativeIndex(array) {
  return new Proxy(array, {
    get(target, prop) {
      // Convert prop to a number if possible
      const index = Number(prop);

      // Check if index is a valid number
      if (!isNaN(index)) {
        if (index < 0) {
          return target[target.length + index]; // support negative indexing
        }
        return target[index]; // normal positive indexing
      }

      // for methods like length, push, etc.
      return target[prop];
    },
  });
}

let proxyArr = negativeIndex(arr);

console.log(proxyArr[-1]); // ✅ 5
console.log(proxyArr[-2]); // ✅ 4
console.log(proxyArr[0]); // ✅ 1
console.log(proxyArr.length); // ✅ 5 (still works)
