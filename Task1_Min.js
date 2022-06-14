function minNum(str){
    let arr = str.split(',').map(Number);
    let num = Math.min.apply(null, arr);
    return num;
}
var min = minNum("2, 5, 3");
console.log(min)