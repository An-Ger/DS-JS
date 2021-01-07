var a = 70;
switch(90) {
    case 76:
        console.log("success");
        break;
    case 90:
        console.log("bingo");
        break;
    default:
        console.log('?');
}
var obj = new Object();
obj.name = 'swk';
console.log(typeof(obj));
console.log(obj.name);
console.log(obj);
obj.gender = 'boy'
console.log(obj);
delete obj.name;
console.log(obj);