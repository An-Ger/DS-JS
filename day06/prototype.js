function Person (){}
console.log(Person.prototype);
//每一个函数都有自己的prototype,即为原型对象
//访问一个对象的属性或者方法的时候，会现在自身找，然后去原型对象寻找
 function MyClass () {}
 MyClass.prototype.name = "我是原型中的name"
 var mc = new MyClass();
 console.log(mc.name);
 console.log("name" in mc);//使用in检查对象中的属性，对象中没有，在原型中检查
 //原型对象也是对象，也有原型
 //Objective原型对象中的隐式原型是null，即尽头
 