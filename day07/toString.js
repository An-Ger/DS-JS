function Person (name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}
var per = new Person("tom", 10, "man");
per.toString = function () {
    console.log('so happy');
}
console.log(per);
console.log(per.toString());
//直接打印一个对象的时候，实际上输出的是对象的toString返回值
console.log(per.hasOwnProperty("string"));
console.log(per.__proto__.__proto__.hasOwnProperty("string"));
console.log(per.__proto__.__proto__.__proto__.hasOwnProperty("string"));
console.log(per.__proto__.hasOwnProperty("string"));