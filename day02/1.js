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

var res = 1 && 2;
console.log(res);//非布尔值会先转换为布尔值进行运算，然后会返回原值
//如果两个值都为true，就返回后面的哪一个
console.log(NaN && 0);//两个都为FALSE，返回前者
console.log(10 > null);//非数值比较的时候会把非数值转换为Number，然后进行比较
//任何值和NaN做任何比较，返回的结果都是False
console.log("11" < '5');//如果两侧都是字符串，则会比较两侧的Unicode
//如果有多位，仅比较第一位,可以对英文名称进行排序
console.log('\u2620');
//undefined衍生自null
//NaN不和任何值相等，包括其本身
console.log("11" === 11);//全等，不会做隐式转换,&& 比||优先级更高
//prompt可以弹出一个文本框，用户可以输入内容
var s = "90";
s = +s;
console.log(typeof(s));
var ss = "111"
console.log(typeof(-ss));