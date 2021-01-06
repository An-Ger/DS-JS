console.log('hello');
var a = 20;
var res = a++ + ++a + a;
console.log(res);//20 + 22 + 22 
//逻辑运算符可以隐式转换为Boolean
var b = '10';
b = !!b;
console.log(b);
console.log(typeof(b));
true || console.log('false');
false || console.log('false');//首先检查第一个值，如果为真，不检查第二个 