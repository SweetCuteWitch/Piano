const COLLECTION = document.querySelectorAll(".main-tile, .extra-tile");

const piano = document.getElementById("body");
let mouse = false;

const notes = document.getElementById("notes");
const letters = document.getElementById("letters");
const fullscreen = document.getElementById("fullscreen");

notes.onclick = function switchNotes(){
    COLLECTION.forEach((elem) =>{
        switch(elem.value){
            case "R":
                elem.value = "c♯";
                break;
            case "T":
                elem.value = "d♯";
                break;
            case "U":
                elem.value = "f♯";
                break;
            case "I":
                elem.value = "g♯";
                break;
            case "O":
                elem.value = "a♯";
                break;
            case "D":
                elem.value = "c";
                break;
            case "F":
                elem.value = "d";
                break;
            case "G":
                elem.value = "e";
                break;
            case "H":
                elem.value = "f";
                break;
            case "J":
                elem.value = "g";
                break;
            case "K":
                elem.value = "a";
                break;
            case "L":
                elem.value = "b";
                break;
        }
    })
}
letters.onclick = function switchLetters(){
    COLLECTION.forEach((elem) =>{
        switch(elem.value){
            case "c♯":
                elem.value = "R";
                break;
            case "d♯":
                elem.value = "T";
                break;
            case "f♯":
                elem.value = "U";
                break;
            case "g♯":
                elem.value = "I";
                break;
            case "a♯":
                elem.value = "O";
                break;
            case "c":
                elem.value = "D";
                break;
            case "d":
                elem.value = "F";
                break;
            case "e":
                elem.value = "G";
                break;
            case "f":
                elem.value = "H";
                break;
            case "g":
                elem.value = "J";
                break;
            case "a":
                elem.value = "K";
                break;
            case "b":
                elem.value = "L";
                break;
        }
    })
}
function playSound(elem){
    switch(elem.value){
        case "c♯":
            var audio = new Audio('assets/c♯.mp3');
            audio.play();
            break;
        case "d♯":
            var audio = new Audio('assets/d♯.mp3');
            audio.play();
            break;
        case "f♯":
            var audio = new Audio('assets/f♯.mp3');
            audio.play();
            break;
        case "g♯":
            var audio = new Audio('assets/g♯.mp3');
            audio.play();
            break;
        case "a♯":
            var audio = new Audio('assets/a♯.mp3');
            audio.play();
            break;
        case "c":
            var audio = new Audio('assets/c.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('assets/d.mp3');
            audio.play();
            break;
        case "e":
            var audio = new Audio('assets/e.mp3');
            audio.play();
            break;
        case "f":
            var audio = new Audio('assets/f.mp3');
            audio.play();
            break;
        case "g":
            var audio = new Audio('assets/g.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('assets/a.mp3');
            audio.play();
            break;
        case "b":
            var audio = new Audio('assets/b.mp3');
            audio.play();
            break; 

        case "R":
            var audio = new Audio('assets/c♯.mp3');
            audio.play();
            break;
        case "T":
            var audio = new Audio('assets/d♯.mp3');
            audio.play();
            break;
        case "U":
            var audio = new Audio('assets/f♯.mp3');
            audio.play();
            break;
        case "I":
            var audio = new Audio('assets/g♯.mp3');
            audio.play();
            break;
        case "O":
            var audio = new Audio('assets/a♯.mp3');
            audio.play();
            break;
        case "D":
            var audio = new Audio('assets/c.mp3');
            audio.play();
            break;
        case "F":
            var audio = new Audio('assets/d.mp3');
            audio.play();
            break;
        case "G":
            var audio = new Audio('assets/e.mp3');
            audio.play();
            break;
        case "H":
            var audio = new Audio('assets/f.mp3');
            audio.play();
            break;
        case "J":
            var audio = new Audio('assets/g.mp3');
            audio.play();
            break;
        case "K":
            var audio = new Audio('assets/a.mp3');
            audio.play();
            break;
        case "L":
            var audio = new Audio('assets/b.mp3');
            audio.play();
            break; 
    }
}

piano.addEventListener('keydown',(event) =>{
    if(event.key==="d" || event.key==="D" || event.key==="в" || event.key==="В"){
        var audio = new Audio('assets/c.mp3');
        audio.play();
        COLLECTION.forEach((elem) =>{
            if(elem.value == "c" || elem.value == "D"){
                elem.classList.add('active')
            }
        })
    }
    if(event.key==="f" || event.key==="F" || event.key==="А" || event.key==="а"){
        var audio = new Audio('assets/d.mp3');
        audio.play();
        COLLECTION.forEach((elem) =>{
            if(elem.value == "d" || elem.value == "F"){
                elem.classList.add('active')
            }
        })
    }
    if(event.key==="g" || event.key==="G" || event.key==="П" || event.key==="п"){
        var audio = new Audio('assets/e.mp3');
        audio.play();
        COLLECTION.forEach((elem) =>{
            if(elem.value == "e" || elem.value == "G"){
                elem.classList.add('active')
            }
        })
    }
    if(event.key==="h" || event.key==="H" || event.key==="Р" || event.key==="р"){
        var audio = new Audio('assets/f.mp3');
        audio.play();
        COLLECTION.forEach((elem) =>{
            if(elem.value == "f" || elem.value == "H"){
                elem.classList.add('active')
            }
        })
    }
    if(event.key==="j" || event.key==="J" || event.key==="О" || event.key==="о"){
        var audio = new Audio('assets/g.mp3');
        audio.play();
        COLLECTION.forEach((elem) =>{
            if(elem.value == "g" || elem.value == "J"){
                elem.classList.add('active')
            }
        })
    }
    if(event.key==="k" || event.key==="K" || event.key==="л" || event.key==="Л"){
        var audio = new Audio('assets/a.mp3');
        audio.play();
        COLLECTION.forEach((elem) =>{
            if(elem.value == "a" || elem.value == "K"){
                elem.classList.add('active')
            }
        })
    }
    if(event.key==="l" || event.key==="L" || event.key==="д" || event.key==="Д"){
        var audio = new Audio('assets/b.mp3');
        audio.play();
        COLLECTION.forEach((elem) =>{
            if(elem.value == "b" || elem.value == "L"){
                elem.classList.add('active')
            }
        })
    }
    if(event.key==="r" || event.key==="R" || event.key==="к" || event.key==="К"){
        var audio = new Audio('assets/c♯.mp3');
        audio.play();
        COLLECTION.forEach((elem) =>{
            if(elem.value == "c♯" || elem.value == "R"){
                elem.classList.add('active')
            }
        })
    }
    if(event.key==="t" || event.key==="T" || event.key==="Е" || event.key==="е"){
        var audio = new Audio('assets/d♯.mp3');
        audio.play();
        COLLECTION.forEach((elem) =>{
            if(elem.value == "d♯" || elem.value == "T"){
                elem.classList.add('active')
            }
        })
    }
    if(event.key==="u" || event.key==="U" || event.key==="г" || event.key==="Г"){
        var audio = new Audio('assets/f♯.mp3');
        audio.play();
        COLLECTION.forEach((elem) =>{
            if(elem.value == "f♯" || elem.value == "U"){
                elem.classList.add('active')
            }
        })
    }
    if(event.key==="I" || event.key==="i" || event.key==="ш" || event.key==="Ш"){
        var audio = new Audio('assets/g♯.mp3');
        audio.play();
        COLLECTION.forEach((elem) =>{
            if(elem.value == "g♯" || elem.value == "I"){
                elem.classList.add('active')
            }
        })
    }
    if(event.key==="o" || event.key==="O" || event.key==="щ" || event.key==="Щ"){
        var audio = new Audio('assets/a♯.mp3');
        audio.play();
        COLLECTION.forEach((elem) =>{
            if(elem.value == "a♯" || elem.value == "O"){
                elem.classList.add('active')
            }
        })
    }
})

piano.addEventListener('keyup', (event) =>{
    COLLECTION.forEach((elem) =>{
        elem.classList.remove('active')
    })
})

piano.addEventListener("mousedown", (event) =>{
    mouse = true;
})

piano.addEventListener("mouseup", (event) =>{
    mouse = false;
    event.target.classList.remove('active');
})

COLLECTION.forEach((elem) => {
        elem.addEventListener("mouseenter", (event) =>{
            
            if (mouse == true){
                event.target.classList.toggle("active");
                playSound(elem);
            }
    })
    elem.addEventListener("mouseleave", (event) =>{
            
        if (mouse == true){
            event.target.classList.remove("active");
        }
    })
    elem.addEventListener("mousedown", (event) =>{
        event.target.classList.toggle("active");
        playSound(elem);
    })
})

fullscreen.addEventListener("mousedown", (event) =>{
    if(document.fullscreenElement){
        document.exitFullscreen()
    }
    else{
        document.documentElement.requestFullscreen();
    }
})

document.addEventListener("fullscreenchange", (event) =>{
    fullscreen.classList.toggle('exitFS')
})
