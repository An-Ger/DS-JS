var a = [5,4,3,2,1,2,3,2,1,];
Array.prototype.duplicate=function() {
  var tmp = [];
  this.concat().sort().sort(function(a,b){
    if(a==b && tmp.indexOf(a) === -1) tmp.push(a);
  });
  return tmp;
}
console.log(Array(a).length);