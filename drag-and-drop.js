
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: '-arcade',
        arcade:{
            gravity: { y: 0 }
        }
    },
    scene: {
        preload: preload,
        create: create
    }
}
function preload() {
    this.load.spritesheet('item', '../Assets/51294670_2509888009026222_8971088956422619136_n.png', 90, 90);
}

function create() {

    // Add some items to left side, and set a onDragStop listener
    // to limit its location when dropped.

    var item;

    for (var i = 0; i < 6; i++)
    {
        // Directly create sprites on the left group.
        item = this.add.sprite(90, 90 * i, 'item', i);

        // Enable input detection, then it's possible be dragged.
        item.inputEnabled = true;

        // Make this item draggable.
        item.input.enableDrag();
        
        // Then we make it snap to left and right side,
        // also we make it only snap when released.
        item.input.enableSnap(90, 90, false, true);

        // Limit drop location to only the 2 columns.
        item.events.onDragStop.add(fixLocation);
    }
}

function render() {

    this.debug.text('Group Left.', 100, 560);
    this.debug.text('Group Right.', 280, 560);

}

function fixLocation(item) {

    // Move the items when it is already dropped.
    if (item.x < 90) {
        item.x = 90;
    }
    else if (item.x > 180 && item.x < 270) {
        item.x = 180;
    }
    else if (item.x > 360) {
        item.x = 270;
    }

}
