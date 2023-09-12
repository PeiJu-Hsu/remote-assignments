
function calculate(args) {
    const calculator = args.op
    const num1 = args.n1
    const num2 = args.n2
    let ans =''
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
