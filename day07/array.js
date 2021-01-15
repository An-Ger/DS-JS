var  arr = new Array();
arr[0] = 1;
arr[1] = 2;
arr[2] = 3;
arr[10] = 10;
console.log(arr);
console.log(...arr);
console.log(arr.length);
//使用字面量创建数组
var s = [1, 2, 3, 4, 5];
var a = [].fill(1)
console.log(a);
console.log(...a);

var b = [1, 2, 3];
var c = b.push(4)
console.log(c);//push会把数组新的长度作为返回值
console.log(b.pop());//pop在末尾删除，返回该值
console.log(b.unshift(0));//unshift在前加一个元素，返回长度
console.log(...b);




