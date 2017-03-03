function parent(param){
  var parentVar = param;
  function child(){
    var childVar = 'leve';
    console.log(parentVar + ' ' + childVar );
  }
  child();
  console.log(parentVar); // + ' ' + childVar);
}

parent('hello');


function sayHello(name){
  var text = 'Hello ' + name;
  var logHello = function(){ console.log(text); }
  logHello();
}

sayHello('lee');  // Hello lee
//logHello('lee');  // logHello is not defined

setTimeout(function(){
  console.log("dldldl")
}, 1000);
