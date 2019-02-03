window.onload = function() {

    var canvas = document.getElementById('levelTwoCanvas');
    var ctx = canvas.getContext("2d");
    if (ctx) {
        //Create a variable to hold images
        var sky = document.getElementById("sky");
        ctx.drawImage(sky, 0, 0, 800, 480);

        var grass = document.getElementById("grass");
        ctx.drawImage(grass, 0, 390, 800, 115);

        var clouds = document.getElementById("clouds");
        ctx.drawImage(clouds, 0, 70, 800, 115);

        var treesSick = document.getElementById("treesSick");
        ctx.drawImage(treesSick, 430, 230, 320, 200);

        var treesSick2 = document.getElementById("treesSick");
        ctx.drawImage(treesSick, 430, 230, 320, 200);

        var treesSick3 = document.getElementById("treesSick");
        ctx.drawImage(treesSick, 430, 230, 320, 200);

        var wizard = document.getElementById("wizard");
        ctx.drawImage(wizard, 140, 280, 125, 150);

    }
}

function updateLevelTwoCanvas() {
    var canvas = document.getElementById('levelTwoCanvas');
    var ctx = canvas.getContext("2d");
    if (ctx) {
        //Create a variable to hold images
        var sky = document.getElementById("sky");
        ctx.drawImage(sky, 0, 0, 800, 480);

        var grass = document.getElementById("grass");
        ctx.drawImage(grass, 0, 390, 800, 115);

        var clouds = document.getElementById("clouds");
        ctx.drawImage(clouds, 0, 70, 800, 115);

        var trees = document.getElementById("trees");
        ctx.drawImage(trees, 430, 230, 320, 200);


        var wizard = document.getElementById("wizard");
        ctx.drawImage(wizard, 140, 280, 125, 150);

    }
}