var numSquares = 6
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var colorPicked = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
colorDisplay.textContent = colorPicked;
var h1 =document.querySelector("h1"); 
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click",function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    colorPicked = pickColor();
    colorDisplay.textContent = colorPicked;
    for(var i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.background = colors[i];
        } else{ squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click",function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    colorPicked = pickColor();
    colorDisplay.textContent = colorPicked;
    for(var i=0;i<squares.length;i++){
     squares[i].style.background = colors[i];
     squares[i].style.display = "block";      
    }
});

resetButton.addEventListener("click" ,function(){
    //generate all random colors
    colors = generateRandomColors(numSquares);
    //change picked color
    colorPicked = pickColor();
    //display picked color 
    colorDisplay.textContent = colorPicked;
    // set six random colors
    for(var i=0;i<squares.length;i++){
        squares[i].style.background=colors[i];
    }
})


for(var i=0;i<squares.length;i++)
{
    //add initial color to square
    squares[i].style.background = colors[i];
   //add listener to the square
   squares[i].addEventListener("click",function()
   {
    // grab a clicked color
    var colorClicked = this.style.background;
    //compare to the picked color
    if(colorClicked===colorPicked)
    { messageDisplay.textContent ="Correct";
      resetButton.textContent="Play Again?";
           changeColor(colorClicked);  
           h1.style.background = colorClicked;                     
    }
    else { this.style.background = "#232323";
            messageDisplay.textContent ="Try Again";
         }
 });
}
function changeColor(color){
    for(var i=0;i<squares.length;i++){
        squares[i].style.background=color;
    }
}
function pickColor(){
   var random= Math.floor(Math.random() * colors.length);
   return colors[random];
}

function generateRandomColors(num){
//make an array
var arr=[];
//make random colors in an array
for(var i=0;i<num;i++){
    //get random color and push into array
    arr.push(randomColors())
}
//return an array
return arr;
}

function randomColors(){
    //pick a "red" color 0-255
    var r = Math.floor(Math.random() * 256);
    //pick a "yellow" color 0-255
    var g = Math.floor(Math.random() * 256);
    //pick a "green" color 0-255
    var b = Math.floor(Math.random() * 256);
    return "rgb("+r+", "+g+", "+b+")";
} 
