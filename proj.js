function compute_regular() {
    basefare = 50.00;
    perKMrate = 25.00;
    baseKM = 20;


    let totalbasea = baseKM * perKMrate + basefare;

    document.getElementById('output1').innerHTML = 'Your regular fare would amount to: ' + totalbasea + ' php';
}

function compute_discounted() {
    basefare = 50.00;
    perKMrate = 25.00;
    baseKM = 20;


    let totalbaseb = baseKM * perKMrate + basefare;
    let addeddiscount = basefare - 0.2;
    ;

    document.getElementById('output2').innerHTML = 'Your discounted fare would amount to: ' + addeddiscount + ' php';
}
