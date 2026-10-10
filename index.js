// This prints as soon as the file loads, so I know the <script> tag is working.
// The <script> tag is at the bottom of <body> so the buttons exist before this runs.
console.log("index.js loaded")

// Grab all seven buttons. They all have the class "drum", so this gives me a list of them.
let drums = document.querySelectorAll(".drum");

// Loop through the list and give each button a click listener.
// This is one loop instead of writing the same code seven times.
for(let i = 0; i < drums.length; i++){
    drums[i].addEventListener("click", function(event){
        // event.target is the button that was clicked. innerHTML is the letter on it.
        let key = event.target.innerHTML;
        console.log("clicked: " + key);
        playSound(key);
        flashButton(key);
    });
}

// Keyboard: listen on the whole document so any key press is caught.
// event.key is the letter that was pressed, e.g. "w".
// It calls the same playSound function as clicking, so the sounds are only written once.
document.addEventListener("keydown", function(event){
    console.log("key pressed: " + event.key);
    playSound(event.key);
    flashButton(event.key);
});

// Makes the button flash when it's played.
// Finds the button whose letter matches the key, adds the "pressed" class from the CSS,
// then setTimeout removes it again after 100 milliseconds so it looks like a quick flash.
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

// Plays the sound that matches a letter.
// Both the click listener and the keyboard listener call this.
// The switch checks the letter and plays the right mp3. The paths are relative (no leading /)
// so they still work on the server. break stops it from running the next case too.
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
        // default runs for any key that isn't a drum, like Shift or Enter,
        // so I can see in the console that nothing was supposed to play.
        default:
            console.log("no sound for: " + key);
    }
}
