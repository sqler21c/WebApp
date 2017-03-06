var value = 1;
var obj = {
  value:100,
  foo: function(){
    console.log("foos's this : ", this);
    console.log("foos's this.value: " , this.value);

    function bar(){
      console.log(" bar's this : ", this);
      console.log("bar's this.value: ", this.value);
    }

    bar();
  }
}

obj.foo();
