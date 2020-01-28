const arrMenu = ["каша", "суп", "пюре"];
let inset = prompt("замість якого товару вставити", "каша");
let insteadOf;
let insertValue = [];
function menu1() {
    let i;
    let insetIn;
    function isPositive(number) {
        return number == inset;
    }
    alert(arrMenu.some(isPositive));
    for (k = 0; insetIn != ""; k++ ) {
        insetIn = prompt("що вставити?", "");
        insertValue.push(insetIn);
        console.log(insertValue);   
    }
    insertValue.pop(insetIn);
    for (i = 0; i < arrMenu.length; i++) {
        console.log(arrMenu[i]); 
        console.log(i);
        if (arrMenu[i] == inset) {
            insteadOf = i;
            let newArrMenu = arrMenu.splice(i, 1, insertValue[0]);
            for (j = 1; j < insertValue.length; j++) {
                newArrMenu = arrMenu.splice(i, 0, insertValue[j]);
                console.log(newArrMenu);
            }
        }
    } 
    document.write(arrMenu);
    console.log(arrMenu);
}
menu1(insteadOf, insertValue, arrMenu);