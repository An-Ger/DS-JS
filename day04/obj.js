//基本数据类型和引用数据类型
var a = 123;
var b = a;
a++;
console.log(a);
console.log(b);     
var obj = new Object();
obj.name = 'fun'
var obj2 = obj;
obj.name = 'fuck'
console.log(obj.name);
console.log(obj2.name);
//基本数据类型直接在栈内存中保存， 值与值之间是独立存在的
//引用数据类型，对象，保存在堆内存中
var obj0 = new Object();
var obj00 = {}; //对象字面量
obj0.name = '?'
obj00.name = '???'
console.log(typeof(obj0));
var op = {
    name: "op",
    gender: 'boy',
    age: 12,
    test: {name: 'shasha'}
}
console.log(op);