var colors = generateRandomColor(6);

var squares =  document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay =  document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");

colorDisplay.textContent = pickedColor;

for(var i=0;i<squares.length;i++){
    //add initial colors to square
    squares[i].style.backgroundColor = colors[i];
    //add click listeners to square
    
    squares[i].addEventListener("click",function(){
        var clickedColor = this.style.backgroundColor;
        console.log(clickedColor, pickedColor);
        if(clickedColor == pickedColor){
            messageDisplay.textContent = "Correct!";
            changeColors(clickedColor);
            h1.style.background = clickedColor;
        }else{
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });

    //grab color of clicked square
    
    //compare color to pickedColor
}

function changeColors(color){
    for(var i=0;i< squares.length;i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random]; 
}

function generateRandomColor(num){
    //make an array
    var arr = [];
    //repeat num times
    //add num random colors to arr
    for(var i = 0;i < num;i++){
        //get random color and push into arr
        arr.push(randomColor())
    }
    //return that array
    return arr;
}

function randomColor(){
    //pick a "red from 0 -255"
    var r = Math.floor(Math.random() * 256);
    //pick a "green from 0 -255"
    var g = Math.floor(Math.random() * 256);
    //pick a "blue from 0 -255"
    var b = Math.floor(Math.random() * 256);

    "rgb(r,g,b)"
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function test(){
    
}