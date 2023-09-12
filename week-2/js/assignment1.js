function max(numbers) {
    let value='';
    for ( i = 0; i < numbers.length; i++) {
        if (numbers[i] > value) {
            value = numbers[i] 
        }
    console.log(value);
    }
    return value;
}
