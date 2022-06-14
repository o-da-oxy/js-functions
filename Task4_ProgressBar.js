function progressBar(n){
    let percents = "";
    let points = "..........";
    if (n == 100){
        console.log("100% Complete!");
        console.log("[%%%%%%%%%%]");
        return;
    }
    for (let i = 0; i < n/10; i++){
        percents += "%";
        points = points.slice(0, -1);
    }
    console.log(`${n}% [${percents}${points}]`)
    console.log("Still loading...")
}
progressBar(90);