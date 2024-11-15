var buttonColor = ['red','blue','green','yellow'];
var gamePattern = [];
var userClickedPattern = []; 
var level = 0;
var started = false;

$('.btn').on('click', function(){
    userChosenColor = $(this).attr('id');
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor); 
    checkAnswer(userClickedPattern.length - 1);
})

function nextSequence(){
    level++;

    $('h1').text('Level '+level);

    var randomNumber = Math.floor(Math.random() * 4);

    var randomChosenColor = buttonColor[randomNumber];

    gamePattern.push(randomChosenColor);

    $('#' + randomChosenColor).fadeOut(100).fadeIn(100);
    
    playSound(randomChosenColor)
    
};


function playSound(name){
    var sounds = new Audio('sounds/'+name+'.mp3');
    sounds.play();
}

function animatePress(currentColor){
    $('#'+currentColor).addClass('pressed');
    setTimeout(function(){
        $('#'+currentColor).removeClass('pressed');
    }, 75);
}

$(document).keypress(function() {
    if (started === false){
        nextSequence();
        $('h1').text('Level '+level)
        started = true;
    }
});

function checkAnswer(currentLevel){
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        if (userClickedPattern.length === gamePattern.length){
            setTimeout(function(){
                nextSequence();
            },1000)
            userClickedPattern = [];
        }
    }else{
        playSound('wrong');
        $('body').addClass('game-over');
        setTimeout(function(){
            $('body').removeClass('game-over');
        },150);
        $('h1').text('Game Over, Press Any Key to Restart');
        startOver();
    }
}

function startOver(){
    userClickedPattern = [];
    gamePattern = [];
    level = 0;
    started = false;
}

