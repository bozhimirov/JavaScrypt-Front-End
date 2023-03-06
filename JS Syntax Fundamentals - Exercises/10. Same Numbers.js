function sameNumbersAndSum(num){
    let nums = num.toString()
    let first = nums[0]
    let condition = 0
    let sum = 0
    for (let i = 0; i <= nums.length - 1; i++){
            if (first === nums[i]){
                condition += 0;
                sum += Number(nums[i])
            } else{
                condition += 1;
                sum += Number(nums[i])
            }
    }
    let result
    if (condition == 0){
        result = true
    } else {
        result = false
    }
    console.log(result)
    console.log(sum)
}

sameNumbersAndSum(2222222)