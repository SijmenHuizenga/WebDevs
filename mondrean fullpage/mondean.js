var colors = [
    "red",
    "yellow",
    "blue",
    "white",
    "white",
    "white"
];

function fillScreenRandomDivs(){
    var screenW = window.innerWidth;
    var screenH = window.innerHeight;
    var blockSize = {
        width: Math.round(screenW/10),
        height: Math.round(screenH/10)
    };
    var blockAmount = {
        width: Math.round(screenW / blockSize.width),
        height: Math.round(screenH / blockSize.height),
    }

    var divs = "";
    for(var i = 0; i < getRandomBetween(100, 300); i++){
        divs += "<div style='";
        divs += "left:" + getRandomBetween(0, blockAmount.width-1)*blockSize.width-4 + "px;";
        divs += "top:" + getRandomBetween(0, blockAmount.height-1)*blockSize.height-4 + "px;";
        divs += "width:" + (getRandomBetween(1, blockAmount.width/4)*blockSize.width-4) + "px;";
        divs += "height:" + (getRandomBetween(1, blockAmount.height/4)*blockSize.height-4) + "px;";
        divs += "background-color:" + colors[getRandomBetween(0, colors.length)] + ";";
        divs += "border: solid black 2px"
        divs += "'> </div>";
    }
    document.getElementById("pageBody").innerHTML=divs;
}

function getRandomBetween(min, max){
    return Math.floor(Math.random() * max) + min;
}

function roundOn50(x){
    return Math.round(x/50)*50
}
