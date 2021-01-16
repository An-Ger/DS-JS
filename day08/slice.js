var  arr = [1, 2, 3, 4, 5];
//slice从数组中提取元素
//两个参数，截取开始和结束位置
//该方法不会改变原数组，会返回一个新数组,不包含结束索引
var a = arr.slice(0, 2);
console.log(...a);
//第二个参数可以不写，从开始位置截取，直到结束
var b = arr.slice(1);
console.log(...b);
//索引也可以传递一个负数，最后一个元素索引为-1，倒数第二个为-2
var c = arr.slice(1, -1);//不包含结束位置，所以只输出到4
var d = arr.slice(1, -2);
console.log(...c);
console.log(...d);
//splice删除数组中的指定元素,会影响原数组，删除，并返回数组
//第一个参数表示开始位置，第二个参数表示删除的数量,第三个参数以及以后表示要添加替换的元素,自动插入在删除位置之后

var e = arr.splice(0, 2)
console.log(...arr);
console.log(...e);
var f = arr. splice(0, 1, 9)
console.log(...f);
console.log(...arr);