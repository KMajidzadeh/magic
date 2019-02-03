//Variable declaration



const spell = document.getElementsByClassName('spell')[0];
//

var dragged;

// for(const dropzone of dropzones){
//     dropzone.addEventListener('dragstart', dragStart);
//     dropzone.addEventListener('dragend', dragEnd);
//     dropzone.addEventListener('dragover', dragOver);
//     dropzone.addEventListener('dragenter', dragEnter);
//     dropzone.addEventListener('dragleave', dragLeave);
//     //dropzone.addEventListener('drop', drop);
//     //container.addEventListener('dragexit', dragExit);
// }



// document.addEventListener("drag", function( event ) {

//   }, false);

document.addEventListener("dragstart", function(event) {
    // store a reference on the dragged elem
    dragged = event.target;
    //being-dragged CSS sets style
    event.target.classList.toggle('spell-dragging');
    console.log(`DRAG-START: event.target.classList: ${event.target.classList}`);
//       // make it half transparent
//       event.target.style.opacity = .5;
}, false);

//dragend
document.addEventListener("dragend", function(event) {
    // reset the transparency    
    event.target.classList.toggle('spell-dragging');
    console.log(`DRAG-END: event.target.classList: ${event.target.classList}`)
}, false);

//drag over
/* events fired on the drop targets */
document.addEventListener("dragover", function(event) {
          // prevent default to allow drop
          event.preventDefault();
}, false);

// dropping the div into the bigger div
document.addEventListener("dragenter", function(event) {
    // highlight potential drop target when the draggable element enters it
    if ( event.target.className == "dropzone" ) {
        event.target.classList.toggle("entered-dropzone");
        console.log(`DRAG-ENTER: event.target.classList: ${event.target.classList}`);
    }    
}, false);

document.addEventListener("dragleave", function(event) {
      // reset background of potential drop target when the draggable element leaves it
     console.log('DRAG LEFT')
      if ( event.target.className != "dropzone" ) {
        event.target.classList.toggle("entered-dropzone");
        console.log(`DRAG-LEAVE: event.target.classList: ${event.target.classList}`);
      }
},false);

document.addEventListener("drop", function(event) {
    // prevent default action (open as link for some elements)
    event.preventDefault();
    // move dragged elem to the selected drop target
    console.log(`event.target.className: ${event.target.className}`);
    if ( event.target.classList.contains("entered-dropzone")) {
        event.target.classList.toggle("entered-dropzone");

        console.log("HERE?");
        //removeChild( dragged );
        dragged.parentNode.removeChild( dragged );
        // .removeChild( dragged );
        event.target.appendChild( dragged );
        console.log(`PARENT NODE: ${dragged.parentNode}`);
       
    }   
}, false);







///<<<<<------- CORE IDEA HERE !!!! ////// ----->>>>>

// const spell = document.getElementsByClassName('spell')[0];
// const dropzones = document.getElementsByClassName('dropzone');

// var dragged;
// var box;

// for(const dropzone of dropzones){
//     dropzone.addEventListener('dragstart', dragStart);
//     dropzone.addEventListener('dragend', dragEnd);
//     dropzone.addEventListener('dragover', dragOver);
//     dropzone.addEventListener('dragenter', dragEnter);
//     dropzone.addEventListener('dragleave', dragLeave);
//     //dropzone.addEventListener('drop', drop);
//     //container.addEventListener('dragexit', dragExit);
// }



// // document.addEventListener("drag", function( event ) {

// //   }, false);

// function dragStart() {
//     // store a reference on the dragged elem
//     dragged = event.target;
//     //being-dragged CSS sets style
//     event.target.classList.toggle('spell-dragging');
//     console.log(`DRAG-START: event.target.classList: ${event.target.classList}`);
// //       // make it half transparent
// //       event.target.style.opacity = .5;
// }

// function dragEnd() {
//     // reset the transparency    
//     event.target.classList.toggle('spell-dragging');
//     console.log(`DRAG-END: event.target.classList: ${event.target.classList}`)
// }

// /* events fired on the drop targets */
// function dragOver() {
//           // prevent default to allow drop
//           event.preventDefault();
// }

// // dropping the div into the bigger div
// function dragEnter() {
//     // highlight potential drop target when the draggable element enters it
//     event.target.classList.toggle("entered-dropzone");
//     console.log(`DRAG-ENTER: event.target.classList: ${event.target.classList}`);
// }

// function dragLeave() {
//       // reset background of potential drop target when the draggable element leaves it
//      console.log('DRAG LEFT')
//       if ( event.target.className != "dropzone" ) {
//         event.target.classList.toggle("entered-dropzone");
//         console.log(`DRAG-LEAVE: event.target.classList: ${event.target.classList}`);
//       }
// }

// document.addEventListener("drop", function(event) {
//     // prevent default action (open as link for some elements)
//     event.preventDefault();
//     // move dragged elem to the selected drop target
//     console.log('HEEEELLOOOOOO');
//     //event.target.classList.toggle("entered-dropzone");
//     console.log(`event.target.className: ${event.target.className}`);
//     if ( event.target.classList.contains("entered-dropzone")) {
//         console.log("HERE?");
//         //removeChild( dragged );
//         dragged.parentNode.removeChild( dragged );
//         // .removeChild( dragged );
//         event.target.appendChild( dragged );
//         console.log(`PARENT NODE: ${dragged.parentNode}`);
       
//     }   
// }, false);

// for(const container of containers){
//     container.addEventListener("dragover", dragover);
//     container.addEventListener("dragenter", dragenter);
//     container.addEventListener("drop", drop);
// }

// function dragover(e){

//     e.preventDefault()
// }
// function dragenter(e){
//     e.preventDefault()
// }
// function drop(){
//     this.append(spell)
// }
