console.log("index.js loaded")

let drums = document.querySelectorAll(".drum");

for(let i = 0; i < drums.length; i++){
    drums[i].addEventListener("click", function(event){
        let key = event.target.innerHTML;
        console.log("clicked: " + key);
        playSound(key);
        flashButton(key);
    });
}

document.addEventListener("keydown", function(event){
    console.log("key pressed: " + event.key);
    playSound(event.key);
    flashButton(event.key);
});

function flashButton(key){
    for(let i = 0; i < drums.length; i++){
        if(drums[i].innerHTML === key){
            let button = drums[i];
            button.classList.add("pressed");
            setTimeout(function(){
                button.classList.remove("pressed");
            }, 100);
        }
    }
}

function playSound(key){
    switch(key){
        case "w":
            let tom1 = new Audio("sounds/tom-1.mp3")
            tom1.play();
            break;
        case "a":
            let tom2 = new Audio("sounds/tom-2.mp3")
            tom2.play()
            break;
        case "s":
            let tom3 = new Audio("sounds/tom-3.mp3")
            tom3.play()
            break;
        case "d":
            let tom4 = new Audio("sounds/tom-4.mp3")
            tom4.play()
            break;
        case "j":
            let crash = new Audio("sounds/crash.mp3")
            crash.play()
            break;
        case "k":
            let kick = new Audio("sounds/kick-bass.mp3")
            kick.play()
            break;
        case "l":
            let snare = new Audio("sounds/snare.mp3")
            snare.play()
            break;
        default:
            console.log("no sound for: " + key);
    }
}
