function nThElement(array, step){
    let newArray = []
    for (let i = 0; i < array.length; i+=step){
        newArray.push(array[i]);
    }

    return newArray;

}

nThElement(
    ['5', '20', '31', '4', '20'], 2
);