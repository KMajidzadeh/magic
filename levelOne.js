
window.onload = function() {

    var canvas = document.getElementById('levelOneCanvas');
    console.log("Level one here");
    var ctx = canvas.getContext("2d");
    if (ctx) {
        //Create a variable to hold images
        var sky = document.getElementById("sky");
        ctx.drawImage(sky, 0, 0, 800, 480);

        var grass = document.getElementById("grass");
        ctx.drawImage(grass, 0, 390, 800, 115);

        var clouds = document.getElementById("clouds");
        ctx.drawImage(clouds, 0, 70, 800, 115);

        var tree = document.getElementById("1tree");
        ctx.drawImage(tree, 530, 230, 120, 200);

        var wizard = document.getElementById("wizard");
        ctx.drawImage(wizard, 120, 260, 125, 150);


    }
}

function updateLevelOneCanvas() {
    var canvas = document.getElementById('levelOneCanvas');
    console.log("Level one here");
    var ctx = canvas.getContext("2d");
    if (ctx) {
        //Create a variable to hold images
        var sky = document.getElementById("sky");
        ctx.drawImage(sky, 0, 0, 800, 480);

        var grass = document.getElementById("grass");
        ctx.drawImage(grass, 0, 390, 800, 115);

        var clouds = document.getElementById("clouds");
        ctx.drawImage(clouds, 0, 70, 800, 115);

        var tree = document.getElementById("healthyTree");
        ctx.drawImage(tree, 530, 230, 120, 200);

        var wizard = document.getElementById("wizard");
        ctx.drawImage(wizard, 120, 260, 125, 150);


    } 
}

