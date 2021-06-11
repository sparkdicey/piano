document.querySelector("body").webkitRequestFullScreen();
screen.orientation.lock("landscape-primary");
for(var i = 0; i < document.querySelectorAll("button").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function(){
       var buttonClicks = this.textContent;
       if (buttonClicks === "C"){
           var soundC = new Audio("sounds/sound C.mp3");
           soundC.play();
       } else if ( buttonClicks === "D"){
        var soundD = new Audio("sounds/sound D.mp3");
        soundD.play();
       }else if (buttonClicks === "E"){
        var soundE = new Audio("sounds/sound E.mp3");
        soundE.play();
       } else if (buttonClicks === "F"){
        var soundF = new Audio("sounds/sound F.mp3");
        soundF.play();
       } else if ( buttonClicks === "G"){
        var soundG = new Audio("sounds/sound G.mp3");
        soundG.play();
       } else if ( buttonClicks === "A"){
        var soundA = new Audio("sounds/sound A.mp3");
        soundA.play();
       } else if ( buttonClicks === "B") {
        var soundB = new Audio("sounds/sound B.mp3");
        soundB.play();
       } else if ( buttonClicks === "c"){
        var audio = new Audio("sounds/sound C end.mp3");
        audio.play()
       }
    });
}
