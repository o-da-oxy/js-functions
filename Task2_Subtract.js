function sub(str){
    let arr = str.split(',').map(Number);
    return arr[0] + arr[1] - arr[2];
}
console.log(sub("23, 6, 10"));