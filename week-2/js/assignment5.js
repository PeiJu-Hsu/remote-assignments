function twoSum(nums, target) {
    const len = nums.length;
    let answer = ''
    for (i=0; i < (len - 1); i++) {
        for (j = i+1; j < len; j++ ){
            let a = nums[i] + nums[j]
            if ( a === target) {
                answer += `[${i}, ${j}]`;
            } else {
                answer = answer;
            }
        }
    }
    if (!Boolean(answer)) {
        answer = 'no match data'
    }
    return answer;
}
console.log(twoSum([-2,7,11,15,20], 18))