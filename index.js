let buttons = document.querySelectorAll('.drum');

// Add click event to all the buttons
for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click',function(){  
        let btnClick = this.innerText;
        mySound(btnClick)
    
});
};

// Add keypress event to all the buttons
document.addEventListener('keydown',function(event){
    let myKey = event.key;
    mySound(myKey);
});

// Get all the individual buttons from the DOM
const buttonW = document.querySelector(".w")
const buttonA = document.querySelector(".a")
const buttonS = document.querySelector(".s")
const buttonD = document.querySelector(".d")
const buttonJ = document.querySelector(".j")
const buttonK = document.querySelector(".k")
const buttonL = document.querySelector(".l")

// Animate the button click
function myAnime(edit){
    edit.classList.add('pressed');
    setTimeout(function(){
        edit.classList.remove('pressed');
    }, 300);
}

// Trigger event based on keypress and click
function mySound(key){
    switch(key){
        case "w":
            let crash = new Audio("sounds/crash.mp3");
            myAnime(buttonW)
            crash.play();
            break;
        case "a":
            let kick = new Audio("sounds/kick-bass.mp3");
            myAnime(buttonA)
            kick.play();
            break;
        case "s":
            let snare = new Audio("sounds/snare.mp3");
            myAnime(buttonS)
            snare.play();
            break;
        case "d":
            let tom1 = new Audio("sounds/tom-1.mp3");
            myAnime(buttonD)
            tom1.play();
            break;
        case "j":
            let tom2 = new Audio("sounds/tom-2.mp3");
            myAnime(buttonJ)
            tom2.play();
            break;
        case "k":
            let tom3 = new Audio("sounds/tom-3.mp3");
            myAnime(buttonK)
            tom3.play();
            break;
        case "l":
            let tom4 = new Audio("sounds/tom-4.mp3");
            myAnime(buttonL)
            tom4.play();
             break;
        default:
            break;
    }
    
};




