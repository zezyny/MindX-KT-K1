
function primeNum(number) {
    if (number<2) {
        return false;
    }
    for (i=2;i<number;i++) {
        if (number%i===0) {
            return false
        } 
    }
    return true
}
let sumPrime=0
let prime=``
function sum() {
    let startNum=Number(document.querySelector(".startNum").value)
    let endNum=Number(document.querySelector(".endNum").value)
    for (j=startNum;j<endNum;j++) {
        let result=primeNum(j)
        console.log(result);
        if (result===true) {
            sumPrime+=j
            prime+=`${j} `
        }
        document.querySelector(".prime").innerHTML=`Các số nguyên tố trong khoảng từ ${startNum} đến ${endNum} là: ${prime}`
        document.querySelector(".result").innerHTML=`Tổng các số nguyên tố trong khoảng là: ${sumPrime}`
    }
}
