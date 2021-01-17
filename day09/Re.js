var a = new RegExp('a');
console.log(a);
var str = 'a';
//使用test方法，检查字符串是否符合正则表达式规则
var res = a.test(str)
console.log(res);
//构造函数中可以传递一个匹配模式作为第二个参数,i忽略大小写，g全局匹配模式
var a = new RegExp('a', 'i');
console.log(a.test('A'));

//正则语法
//字面量方式创建正则表达式语法，var 变量 = /正则表达式/匹配模式
var c = /a/i
console.log(c.test('A'));
//检查有a或者有b
var d = /ab/
console.log(d.test('abcd'));
console.log(d.test('acd'));
console.log(d.test('bacd'));
var e = /a|b/ //使用|表示 或 的意思
console.log(e.test('bacd'));
var f = /[ab]/ //检查是否含有a或者b，中括号
console.log(f.test('acd'));
console.log(f.test('bcd'));
var g = /[a-z]/
console.log(g.test('asdaa'));
console.log(g.test('ANKLAJ'));
var h = /[A-z]/
console.log(h.test('asjkdjasd'));
console.log(h.test('AKLJskdjaklsd'));
//检查一个字符串中是否含有 abc, adc, aec
var i = /abc|adc|aec/
console.log(i.test('sad'));
console.log(i.test('abc'));
console.log(i.test('adc'));
var j = /a[bde]c/
console.log(j.test('sadwd'));
console.log(j.test('abc'));
console.log(j.test('adc'));
console.log(j.test('aec'));
var k = /[^ab]/
console.log(k.test('a'));
console.log(k.test('b'));
console.log(k.test('c'));