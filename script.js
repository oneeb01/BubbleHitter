
var Timer = 30;
var score = 0;
var hitn;


// Scoring function:

function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

// Hit function:

function getNewHit(){
    hitn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitn;
}

// Bubble making function:

function makeBubble(){
    var clutter ="";

    for (var i=1; i<=75; i++){
        var n= Math.floor(Math.random()*10)
       clutter += `<div class="bubble">${n}</div>`;
    }
     
    document.querySelector("#panel-btm").innerHTML = clutter;
}

// timer function:

function runTimer(){    
   var clrtimer = setInterval(function(){
        if (Timer > 0){
        Timer--;
        document.querySelector("#timerval").textContent = Timer;
        }
        else{
            clearInterval(clrtimer);
            document.querySelector("#panel-btm").innerHTML = ""; 
        }
    }, 1000)

}

document.querySelector("#panel-btm").addEventListener("click",function(dets){
   
    var clickednum = (Number(dets.target.textContent) ) ;
    if(clickednum === hitn){
        increaseScore();
        makeBubble();
        getNewHit();
    } 
});


// functions calling:

getNewHit();
runTimer();
makeBubble();
