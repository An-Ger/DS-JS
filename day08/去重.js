var arr = [1, 2, 3, 2, 1, 3, 3, 4, 5];
const map = new Map();
for (let i = 0; i < arr.length; i++) {
  if (map.has(arr[i])) i++;
  else map.set(arr[i], i);
}
console.log(...map);
