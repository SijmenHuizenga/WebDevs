var colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple"
];

function createRandomTable(){
    var tableContent = "<table>";

    var rows = getRandomBetween(3, 8);
    var cols = getRandomBetween(3, 8);

    for(var rowNr = 0; rowNr < rows; rowNr++){
        tableContent += "<tr>";
        for(var colNr = 0; colNr < cols; colNr++)
            tableContent += "<td rowspan=" + getRandomBetween(0, rows) + " colspan=" + getRandomBetween(0, cols) + " style='background-color: "+randomColor()+"'>";
        tableContent += "</tr>";
    }
    tableContent += "</table>";

    document.getElementById("painting").innerHTML=tableContent;
}

function fillScreenRandomDivs(){
    var divs = "";
    for(var i = 0; i < getRandomBetween(100, 300); i++){
        divs += "<div style='";
        divs += "left:" + getRandomBetween(0, 10)*10 + "%;";
        divs += "top:" + getRandomBetween(0, 10)*10 + "%;";
        divs += "width:" + getRandomBetween(0, 4)*10 + "%;";
        divs += "height:" + getRandomBetween(0, 4)*10 + "%;";
        divs += "background-color:" + randomColor();
        divs += "'> </div>";
    }
    document.getElementById("painting").innerHTML=divs;
}

function getRandomBetween(min, max){
    return Math.floor(Math.random() * max) + min;
}

function roundOn50(x){
    return Math.round(x/50)*50
}

function randomColor(){
    return "rgb("+getRandomBetween(0, 255)+", "+getRandomBetween(0, 255)+", "+getRandomBetween(0, 255)+")";
}
