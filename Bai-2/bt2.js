function numberOneTriangle() {
    let height=document.querySelector("#inputNumber").value
    // console.log(height);
    for (i=0;i<height;i++) {
        for (j=0;j<=i;j++) {
            document.write("*")
        }
        document.write("<br/>")
    } 
}
