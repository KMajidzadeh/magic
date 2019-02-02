//Variable declaration


const spell = document.getElementsByClassName('spell')[0];
const containers = document.getElementsByClassName('container');

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