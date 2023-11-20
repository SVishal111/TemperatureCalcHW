function tempCalculate(){

    option = document.getElementById("oprOptions").value;

    temp = parseFloat(document.getElementById("num1").value);

    var resultTemp;

    if (option=="CF") {
        resultTemp = (temp * 9/5) + 32 + "°F";
    } else if (option=="CK") {
        resultTemp = temp + 273.15 + "K";
    } else if (option=="FC") {
        resultTemp = (temp - 32) * 5/9 + "°C";
    } else if (option=="FK") {
        resultTemp = (temp - 32) * 5/9 + 273.15 + "K";
    } else if (option=="KC") {
        resultTemp = temp - 273.15 + "°C";
    } else if (option=="KF") {
        resultTemp = (temp - 273.15) * 9/5 + 32 + "°F";
    } else {
        alert("Invalid Input!")
    }

    var firstDegSign;

    if (option=="CF") {
        firstDegSign = "°C"
    } else if (option=="CK") {
        firstDegSign = "°C"
    } else if (option=="FC") {
        firstDegSign = "°F"
    } else if (option=="FK") {
        firstDegSign = "°F"
    } else if (option=="KC") {
        firstDegSign = "K"
    } else if (option=="KF") {
        firstDegSign = "K"
    } else {
        alert("Invalid Input!")
    }    

    document.getElementById("resultShow").value=temp+firstDegSign+" = "+resultTemp ;
}