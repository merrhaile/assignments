// Question 1

function computeSalesCommission(salary, sales) {
    if(salary === true){
        if (sales < 300){
            console.log("No commission");
        } else if (sales >= 300 && sales <= 500){
            console.log(`commission = ${sales * 0.01}`);
        }else if (sales > 500){
            console.log(`commission = ${sales * 0.02}`);
        }
    } else {
        if (sales < 300){
            console.log("No comission");
        }else if (sales >= 300 && sales <= 500){
            console.log(`commission = ${sales * 0.02}`);
        }else if (sales > 500){
            console.log(`commission = ${sales * 0.03}`);
        }
    }

}
console.log(computeSalesCommission(false, 300));