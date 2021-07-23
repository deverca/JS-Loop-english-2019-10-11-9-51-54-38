for(var i=1;i<10;i++){

    for(var j=1;j<10;j++){

        if(j>i){
            break;
        }
        console.log(`${i}*${j}=${i*j}`);

    }
    console.log("\n");

}