function calculation() {
    var numToAdd = 3;
    var numToSubtract = 1;

    add();
    subtract();

    function add() {
 number = number + numToAdd;
    }

    function subtract() {
 number = number - numToSubtract;
    }
}

var number = 0;

calculation();

console.log(number); // 2
console.log(numToAdd); // 에러
console.log(numToSubtract); // 에러
