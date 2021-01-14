//工厂方法创建对象
function createFactory(a, b, c) {
    var obj = new Object();
    obj.name = a;
    obj.age = b;
    obj.gender = c;
    obj.sayName = function(){
        console.log(this.name);
    }
    return obj;
}
var obj2 = createFactory("a", 12, "nan");
console.log(typeof(obj2));
obj2.sayName();
function factory(name, age) {
    var obj = new Object();
    
}
// 工厂方法不能区分类型
// 构造函数
function Person(a, b, c) {
    this.name = a;
    this.age = b;
    this.gender = c;
    this.sayName = function () {
        console.log(this.name);
    }
}
var per = new Person("tom", 10, "male");
per.sayName();





