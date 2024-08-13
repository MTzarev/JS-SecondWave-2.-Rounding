function rounding(number, precision) {
    if (precision >= 15) {
        precision = 15;
    }
    let num = number.toFixed(precision);
    console.log(parseFloat(num));


};
rounding(3.512312324134345135135135132513, 15);