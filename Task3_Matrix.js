function printMatrix(n){
    let str = "";
    for(let i = 0; i < n; i++){
        for(let k = 0; k < n; k++){
            str += `${n} `;
        }
        console.log(str);
        str = "";
    }
}
printMatrix(7);