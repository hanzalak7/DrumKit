var noofdrum =document.querySelectorAll(".drum").length;
for (var i = 0 ; i<noofdrum ; i++)  {


document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
function handleClick(){
    var buttonInnerHtml = this.innerHTML ;
    makesound(buttonInnerHtml);
    buttonanimatin(buttonInnerHtml);
        
    }
    document.addEventListener("keypress",function(){
        makesound(event.key);
        buttonanimatin(event.key);
    });
    function makesound(key){
        switch (key) {
            case "w":
                var audio = new Audio('sounds/crash.mp3');
                audio.play(); 
                break;
                case "a":
                    var audio = new Audio('sounds/kick-bass.mp3');
                    audio.play(); 
                    case "s":
                var audio = new Audio('sounds/snare.mp3');
                audio.play(); 
                break;
                case "d":
                    var audio = new Audio('sounds/tom-1.mp3');
                    audio.play(); 
                    case "j":
                var audio = new Audio('sounds/tom-2.mp3');
                audio.play(); 
                break;
                case "k":
                    var audio = new Audio('sounds/tom-3.mp3');
                    audio.play();
                    case "l":
                        var audio = new Audio('sounds/tom-4.mp3');
                        audio.play(); 
            default:  
                break;
    }
   
}
function buttonanimatin(currentkey){
    var activebtn =   document.querySelector("."+currentkey);
      activebtn.classList.add("pressed");
       setTimeout(function (){
           activebtn.classList.remove("pressed");
       },100)
   }
}
  


// var audio = new Audio('sounds/tom-1.mp3');
// audio.play();  