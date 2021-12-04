

var timer = 0;
var redMarble = document.getElementById('redMarble');
var blueMarble = document.getElementById('blueMarble');
var greenMarble = document.getElementById('greenMarble');  
var pinkMarble = document.getElementById('pinkMarble');  

var redMarbleY= 250;
var redMarbleX= 400;
var blueMarbleY= 245;
var blueMarbleX= 415;
var greenMarbleY= 240;
var greenMarbleX= 430;
var pinkMarbleY= 235;
var pinkMarbleX= 445;

redMarble.style.top = redMarbleY+'px';
redMarble.style.left = redMarbleX+'px';
blueMarble.style.top = blueMarbleY+'px';
blueMarble.style.left = blueMarbleX+'px';
greenMarble.style.top = greenMarbleY+'px';
greenMarble.style.left = greenMarbleX+'px';
pinkMarble.style.top = pinkMarbleY+'px';
pinkMarble.style.left = pinkMarbleX+'px';

document.getElementById('popup').style.visibility = 'hidden';


document.getElementById('startRace').addEventListener('click', function () {
        timer = setInterval(race, 5);
        HideStartBtn();
} );
document.getElementById('reset').addEventListener('click', () => {
    console.log('attempting to clear interval');
    clearInterval(timer);
    HideResetBtn();
    resetRace();
});

function HideResetBtn(){
    document.getElementById('startRace').style.visibility = 'visible';
    document.getElementById('popup').style.visibility = 'hidden';
}
function HideStartBtn(){
    document.getElementById('startRace').style.visibility = 'hidden';
    
}

function ShowBanner(marble, marbleColor){
    document.getElementById('bannerMessage').innerHTML = 'The '+ marble + ' won the race!';
    document.getElementById('popup').style.visibility = 'visible';

    document.getElementById('winner').style.background = marbleColor;
}

function resetRace(){
    console.log('reset race function accessed')
    redMarbleY= 250;
    redMarbleX= 400;
    blueMarbleY= 245;
    blueMarbleX= 415;
    greenMarbleY= 240;
    greenMarbleX= 430;
    pinkMarbleY= 235;
    pinkMarbleX= 445;

    redMarble.style.top = redMarbleY+'px';
    redMarble.style.left = redMarbleX+'px';
    blueMarble.style.top = blueMarbleY+'px';
    blueMarble.style.left = blueMarbleX+'px';
    greenMarble.style.top = greenMarbleY+'px';
    greenMarble.style.left = greenMarbleX+'px';
    pinkMarble.style.top = pinkMarbleY+'px';
    pinkMarble.style.left = pinkMarbleX+'px';
}
function race(){
    RedMarbleMovement();
    BlueMarbleMovement();
    GreenMarbleMovement();
    PinkMarbleMovement();
}
//attempt at a different fucntion
// function Movement(marbleId, marble, marbleColor, value, marbleY, marbleX, marbleEndY ){
//     if(marbleId.style.top <= marbleEndY+'px'){
//         value = Math.floor(Math.random() * 8 + 1);
//     }
//     else if(marbleId.style.top >= marbleEndY+'px'){
//         value = 0
//         clearInterval(timer);
//         ShowBanner(marble, marbleColor);
//     }
   
//     marbleY = marbleY + (value/2);
//     marbleX += value;
    
//     marbleId.style.top = marbleY+'px';
//     marbleId.style.left = marbleX+'px';
//     console.log(marbleY+'px' + ', '+marbleX+'px');

//     return marbleX, marbleY;
// };
function RedMarbleMovement(){
    // var marbleId = document.getElementById('redMarble'); 
    // var value = 0;
    // var marbleY = 250;
    // var marbleX= 400;
    // var marbleEndY = 800;
    // Movement(marbleId, marble, marbleColor, value, marbleY, marbleX, marbleEndY );

    var marble = 'red marble';
    var marbleColor = 'red';
    if(redMarble.style.top <= 800+'px'){
        value = Math.floor(Math.random() * 8 + 1);
    }
    else if(redMarble.style.top >= 800+'px'){
        value = 0
        clearInterval(timer);
        ShowBanner(marble, marbleColor);
    }
   
    redMarbleY = redMarbleY + (value/2);
    redMarbleX += value;
    
    redMarble.style.top = redMarbleY+'px';
    redMarble.style.left = redMarbleX+'px';
    console.log(redMarbleY+'px' + ', '+redMarbleX+'px');
    
}
function BlueMarbleMovement(){
   var marble = 'blue marble';
   var marbleColor = 'blue';
    if(blueMarble.style.top >= 795+'px'){ 
        var value = 0
        clearInterval(timer);
        ShowBanner(marble, marbleColor);
    }
    else{
        value = Math.floor(Math.random() * 8 + 1);
    }

    blueMarbleY = blueMarbleY + (value/2);
    blueMarbleX += value;

    blueMarble.style.top = blueMarbleY+'px';
    blueMarble.style.left = blueMarbleX+'px';
    console.log(blueMarbleY+'px' + ', '+blueMarbleX+'px');
    
}
function GreenMarbleMovement(){
    var marble = 'green marble';
    var marbleColor = 'green';
    if(greenMarble.style.top >= 790+'px'){
        
        var value = 0
        clearInterval(timer);
        ShowBanner(marble, marbleColor);
    }
    else{
        value = Math.floor(Math.random() * 8 + 1);
    }

    greenMarbleY = greenMarbleY + (value/2);
    greenMarbleX += value;

    greenMarble.style.top = greenMarbleY+'px';
    greenMarble.style.left = greenMarbleX+'px';
    console.log(greenMarbleY+'px' + ', '+greenMarbleX+'px');
    
}
function PinkMarbleMovement(){
    var marble = 'pink marble';
    var marbleColor = 'pink';
    if(pinkMarble.style.top >= 785+'px'){
        
        var value = 0
        clearInterval(timer);
        ShowBanner(marble, marbleColor);
    }
    else{
        value = Math.floor(Math.random() * 8 + 1);
    }

    pinkMarbleY = pinkMarbleY + (value/2);
    pinkMarbleX += value;

    pinkMarble.style.top = pinkMarbleY+'px';
    pinkMarble.style.left = pinkMarbleX+'px';
    console.log(pinkMarbleY+'px' + ', '+pinkMarbleX+'px');
    
}