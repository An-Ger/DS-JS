var a = [1, 2, 3, 4];
a.forEach((element, a, b) => {
    console.log(element);
    console.log(a);
    console.log(b);
});//由我们创建，但是不由我们调用的，称为回调函数
//浏览器在回调函数中传三个参数，第三个参数就是正在调用的数组，第二个参数是索引