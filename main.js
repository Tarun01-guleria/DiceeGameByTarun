document.querySelector("h1").style.color = "white";
var randomnum = Math.random();
randomnum = randomnum*6;
randomnum = Math.floor(randomnum)+1;
//Set attribute left image
var randomDiceImage = `dice${randomnum}.png`; //dice1.png to dic6.png
var randomImageSource = "images/"+randomDiceImage; //images/dice1.png to images/dice6.png
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource)


//set attibute right image
 var randomnum2 = Math.random();
 randomnum2 = randomnum2*6;
 randomnum2 = Math.floor(randomnum2)+1;
 var randomDiceImage1 = `dice${randomnum2}.png`; //dice1.png to dice2.png
 
 var randomImageSource2 = "images/"+randomDiceImage1; //images/dice1.png to images/dic6.png
 var image2 = document.querySelectorAll("img")[1];
 image2.setAttribute("src",randomImageSource2);




 //winner annoucement
 if(randomnum>randomnum2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
 }
 else if(randomnum<randomnum2){
    document.querySelector("h1").innerHTML = "Player 2 Wins";
 }
 else{
    document.querySelector("h1").innerHTML = "Match Tied!";
 }





