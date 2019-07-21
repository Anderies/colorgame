var numOfSquares = 6;
var colors = generateRandomColor(numOfSquares);

var squares =  document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay =  document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

for (var i = 0; i < modeButtons.length;i++){
    modeButtons[i].addEventListener("click",function(){
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        if(this.textContent == "Easy"){
            numOfSquares = 3;
        }else{
            numOfSquares = 6;
        }
        reset();
        //figure out how many squares to show
        //pick new colors
        //pick new pickedColor
        //update page to reflect changes
    });
}

function reset(){
    //GENERATE ALL NEW COLORS
    colors = generateRandomColor(numOfSquares);
    //PICK A NEW COLOR FROM ARRAY
    pickedColor = pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Color";
    messageDisplay.textContent = "";
    //CHANGE COLORS OF SQUARES
    for(var i = 0;i< squares.length;i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        }else{
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
    
}



resetButton.addEventListener("click",function(){
    reset();
})

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
            resetButton.textContent = "Play Again?";
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
