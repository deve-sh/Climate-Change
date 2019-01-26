// INTRO ELEMENT TYPING ELEMENT

var texttoprint = "Climate Change is Real!";
var speed = 80;
var i=0;
var textnode = document.getElementById('typist');

function typist(){
    if(i<texttoprint.length){
        textnode.textContent+=texttoprint[i];
        i++;
    }
}

setInterval(typist,speed);
