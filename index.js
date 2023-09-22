var randomNum1 = Math.floor((Math.random()*6)+1);
var randomNum2 = Math.floor((Math.random()*6)+1);

var randomDice1 = "./images/dice"+randomNum1+".png";
var randomDice2 = "./images/dice"+randomNum2+".png";

document.querySelector("img.img1").setAttribute("src",randomDice1);
document.querySelector("img.img2").setAttribute("src",randomDice2);

if (randomNum1 > randomNum2)
    document.querySelector("h1").innerHTML="Player 1 wins !";
else if (randomNum1 < randomNum2)
    document.querySelector("h1").innerHTML="Player 2 wins !";
else 
document.querySelector("h1").innerHTML="Draw !";