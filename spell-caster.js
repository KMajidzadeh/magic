//Variable declaration


const spell = document.getElementsByClassName('spell')[0];

const spells = document.getElementsByClassName('spell');
const dropzones = document.getElementsByClassName('dropzone');
const spell_docks = document.getElementsByClassName('spell-dock');
//

var dragged;

for(const dropzone of dropzones){
    dropzone.addEventListener("dragenter", function(event) {
            // highlight potential drop target when the draggable element enters it
            if ( event.target.className == "dropzone" ) {
                event.target.classList.toggle("entered-dropzone");
            }    
    }, false);
    dropzone.addEventListener("dragleave", function(event) {
              // reset background of potential drop target when the draggable element leaves it
              if ( event.target.className != "dropzone" ) {
                if ( event.target.classList.contains("entered-dropzone")){ 
                    event.target.classList.toggle("entered-dropzone");
                }
                
              }
    },false);
    dropzone.addEventListener("drop", function(event) {
            // prevent default action (open as link for some elements)
            event.preventDefault();
            // move dragged elem to the selected drop target
            console.log(`event.target.className: ${event.target.className}`);
            if ( event.target.classList.contains("dropzone") || event.target.classList.contains("spell-dock")) {
                event.target.classList.toggle("entered-dropzone");
        
                //removeChild( dragged );
                dragged.parentNode.removeChild( dragged );
                // .removeChild( dragged );
                event.target.appendChild( dragged );
               
            }   
    }, false);
}
for(const dock of spell_docks){
    dock.addEventListener("dragenter", function(event) {
            // highlight potential drop target when the draggable element enters it
            if ( event.target.className == "dropzone" ) {
                event.target.classList.toggle("entered-dropzone");
            }    
    }, false);
    dock.addEventListener("dragleave", function(event) {
              // reset background of potential drop target when the draggable element leaves it
            if ( event.target.className != "dropzone" ) {
                  if ( event.target.classList.contains("entered-dropzone")){ 
                    event.target.classList.toggle("entered-dropzone");
                }
            }
    },false);
    dock.addEventListener("drop", function(event) {
            // prevent default action (open as link for some elements)
            event.preventDefault();
            // move dragged elem to the selected drop target
            console.log(`event.target.className: ${event.target.className}`);
            if ( event.target.classList.contains("dropzone") || event.target.classList.contains("spell-dock")) {
                event.target.classList.toggle("entered-dropzone");
        
                //removeChild( dragged );
                dragged.parentNode.removeChild( dragged );
                // .removeChild( dragged );
                event.target.appendChild( dragged );
               
            }   
    }, false);
}
for(const spell of spells){
    // document.addEventListener("drag", function( event ) {
    spell.addEventListener("dragstart", function(event) {
            console.log("check spell is dragged")
            // store a reference on the dragged elem
            dragged = event.target;
            //being-dragged CSS sets style
            event.target.classList.toggle('spell-dragging');
        }, false);
    //dragend
    spell.addEventListener("dragend", function(event) {
        // reset the transparency    
        event.target.classList.toggle('spell-dragging');
        }, false);
}


//drag over
/* events fired on the drop targets */
document.addEventListener("dragover", function(event) {
          // prevent default to allow drop
          event.preventDefault();
}, false);

var modal = document.getElementById("modal");
var modalContent = document.getElementById("modal-content");

function validateLevel(){
 
    try{
        var a = document.getElementById("zone-1").firstChild.id;
        var b = document.getElementById("zone-2").firstChild.id;
        var c = document.getElementById("zone-3").firstChild.id;

        var x = document.getElementById("spell-1");
        var y = document.getElementById("spell-2");
        var z = document.getElementById("spell-3");

        if(a == "spell-1" && b == "spell-2" && c == "spell-3"){
            modalOutput("Congratulations! You saved the tree by calling out the spell HealTree(Oak); ")
            return true;
        }else{
            modalOutput("This was not the correct spell! Please try again");
            return false;
        }
    }catch(err){
        modalOutput("You must fill in all the blanks! Please try again");
        return false;
    }
}
/*Opening a modal with input */
function modalOutput(text){
    modalContent.append(text);
    modal.style.display = "block";
    return false;   
}
/* Closing that annoying modal from earlier*/
var span = document.getElementsByClassName("close")[0];
span.onclick = function(){
    modal.style.display = "none";
    modalContent.removeChild(modalContent.lastChild);
}
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      modalContent.removeChild(modalContent.lastChild);
    }
}