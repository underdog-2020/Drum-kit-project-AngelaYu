var drums = document.getElementsByClassName('drum');

function click(e){
    switch(e){
        case "w":
                var audio = new Audio('./sounds/crash.mp3');
                audio.play();
            break;
        case "a":
                var audio = new Audio('./sounds/kick-bass.mp3');
                audio.play();
            break;
        case "s":
                var audio = new Audio('./sounds/snare.mp3');
                audio.play();
            break;
        case "d":
                var audio = new Audio('./sounds/tom-1.mp3');
                audio.play();
            break;
        case "j":
                var audio = new Audio('./sounds/tom-2.mp3');
                audio.play();
            break;
        case "k":
                var audio = new Audio('./sounds/tom-3.mp3');
                audio.play();
            break;
        case "l":
                var audio = new Audio('./sounds/tom-4.mp3');
                audio.play();
            break;

        default: console.log(buttonHTML);
    }
}

function Anime(key){
    currentKey = document.querySelector("." + key);
    currentKey.classList.add("pressed");
    setTimeout(function(){
        currentKey.classList.remove("pressed");
    }, 200);
}


for(var i=0; i<=6; i++ ){
drums[i].addEventListener("click",function(){click(this.innerHTML); Anime(this.innerHTML)});
}
document.addEventListener("keydown", function(u){click(u.key); Anime(u.key);});
