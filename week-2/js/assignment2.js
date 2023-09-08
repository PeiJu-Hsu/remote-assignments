
function calculate(args) {
    var calculator = args.op
    var num1 = args.n1
    var num2 = args.n2
    var ans =''
    if ((calculator != '+') && (calculator != '-')) {
        ans = 'Not supported';
    } else if (calculator === '+') {
        ans = num1 + num2;
    } else if (calculator === '-') {
        ans = num1 - num2;
    }
    return ans;
}
console.log(calculate({ n1: 2, n2: 3, op: '+' })); // expected output: 5
console.log(calculate({ n1: 5, n2: 2, op: '-' })); // expected output: 3
console.log(calculate({ n1: 1, n2: 6, op: 'x' })); // expected output: 'Not supported'
