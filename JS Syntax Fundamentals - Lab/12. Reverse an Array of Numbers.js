function reverse(n, input){
    let arr=[]
    for(let i=0; i<n; i++){
        arr.push(input[i]);
    }
    let output=[];
    for(let i=arr.length-1; i>=0; i--){
        output.push(arr[i])
    }
    console.log(output.join(' '))
}

reverse(3, [10, 20, 30, 40, 50])