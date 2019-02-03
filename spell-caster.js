//Variable declaration


const spell = document.getElementsByClassName('spell')[0];
const containers = document.getElementsByClassName('container');

var dragged;

document.addEventListener("drag", function( event ) {

  }, false);

document.addEventListener("dragstart", function( event ) {
    // store a reference on the dragged elem
    dragged = event.target;
    
    //being-dragged CSS sets style
    event.target.className == "spell-dragging";
//       // make it half transparent
//       event.target.style.opacity = .5;
}, false);

document.addEventListener("dragend", function( event ) {
    // reset the transparency
    if ( event.target.className == "spell-dragging" ) {
        event.target.className == "spell-dropped";
    }
}, false);

/* events fired on the drop targets */
  document.addEventListener("dragover", function( event ) {
          // prevent default to allow drop
          event.preventDefault();
}, false);

// dropping the div into the bigger div
document.addEventListener("dragenter", function( event ) {
      // highlight potential drop target when the draggable element enters it
      if ( event.target.className == "dropzone" ) {
          event.target.className == "entered-dropzone";
      } 
}, false);

document.addEventListener("dragleave", function( event ) {
          // reset background of potential drop target when the draggable element leaves it
          if ( event.target.className == "entered-dropzone" ) {
              event.target.className = "dropzone";
          }
}, false);

document.addEventListener("drop", function( event ) {
      // prevent default action (open as link for some elements)
      event.preventDefault();
      // move dragged elem to the selected drop target
      if ( event.target.className == "dropzone" ) {
          dragged.parentNode.removeChild( dragged );
          event.target.appendChild( dragged );
      }
        
}, false);

for(const container of containers){
    container.addEventListener("dragover", dragover);
    container.addEventListener("dragenter", dragenter);
    container.addEventListener("drop", drop);
}

function dragover(e){

    e.preventDefault()
}
function dragenter(e){
    e.preventDefault()
}
function drop(){
    this.append(box)
}


setInterval(draw, 10);