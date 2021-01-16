var arr = [1, 2, 3, 2, 1, 3, 3, 4, 5];
var a = [0, 1, 9];
var s = arr.concat(a);
console.log(...arr);
console.log(...s);//原数组无变化，但是会返回一个已经连接的数组,可以连接多个数组
//join()可以吧一个数组转换为字符串
var c = arr.join();
console.log(...arr);
console.log(...c);
//join可以指定一个参数，成为数组中元素的连接符
c = arr.join('----');
console.log(...c);
//reservse()翻转数组
var d = arr.reverse();
console.log(...d);
//sort可以传入一个回调函数,回调函数中需要定义两个形参
let res = [4, 5]
res.sort(function(a, b){
    // console.log(a);
    // console.log(b);
    return b - a;
})
console.log(res);

//apply ,call
function fun (){
console.log(this);
}
fun();
//arguments中封装了调用函数时所传递的实参
