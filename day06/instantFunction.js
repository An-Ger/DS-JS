(function (){console.log("fuck");})();
var ss = function op() {
    console.log("?");
}
ss();
var pp = {
    name: 'oo',
    age: '1',
    gender: 'man'
}
for(var  a in pp){
    console.log(pp[a]);
}
//输出属性值，打印a输出对象的固有属性
// var count = 0;
// for (var l in document){
//     count++;
// }
// console.log(count);
//作用域
//全局作用域创建的变量都会作为全局作用域window的属性
var a = 10;
var b = 11;
// console.log(window.a, window.b);输出a和b
//全局函数也会作为window对象的方法保存
function fun () {
    console.log(1);
}
// window.fun();

f1();

function f1(){ //函数声明会被提前创建
    console.log(1);
}

var ff2 = function f2(){  //函数表达式不会被提前创建
    console.log(2);
}

ff2();

//调用函数时创建函数作用域，每调用一次，创建一次,执行完毕之后销毁
//全局作用域无法访问函数作用域的变量，但是函数作用于操作一个变量时，现在自身作用域寻找，然后找上一层作用域的变量
function f4 () {
    console.log(k);
    var k = 0;
}

f4();
//函数声明和var关键字声明都会在代码执行之前被声明


var m = 0;
function f0 () {
    console.log(m);
    // var m = 1; 输出为undefined，因为声明提前了
}
f0();

var n = 1;
function fun8(){
    console.log(n);
    n = 9;
}
fun8();
console.log(n);//函数中不使用var声明的变量最后都会成为全局变量

function kl () {
    d= 100;//window.d = 100;
}
kl();
console.log(d);
//全局作用域无法访问局部作用域，但是没有使用var声明d，所以d为全局变量可以访问。



var e = 20;
function fpp (e){
    console.log(e);
}
fpp(1);
fpp();//定义形参相当于在函数作用域中声明了变量