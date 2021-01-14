//this指向函数执行上下文的对象
//根据函数调用的方式不同，this会指向不同的对象
function mln(a, b) {
    console.log(a, b);
}
mln(123, 456);
//1.以函数形式调用，this指向window
//2.以方法形式调用，this指向函数
