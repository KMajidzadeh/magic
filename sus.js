

window.onload = function() {

    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext("2d");
    if (ctx) {
        //Create a variable to hold images
        var menu = document.getElementById("menu");
        ctx.drawImage(menu, 0, 0, 800, 480);

        var h = canvas.height - 350;
        console.log(`h: ${h}`);

        var wizard = document.getElementById("wizard");
        ctx.drawImage(wizard, 0, h, 250, 300);
    }
}