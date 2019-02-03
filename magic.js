(function ($) {
    // define variables
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    
    /**
     * Request Animation Polyfill 
     */
    var requestAnimFrame = (function(){
      return  window.requestAnimationFrame       ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame    ||
              window.oRequestAnimationFrame      ||
              window.msRequestAnimationFrame     ||
              function(callback, element){
                window.setTimeout(callback, 1000 / 60);
              };
    })();
 /*
 * Asset preloader object. This loads all our assets/images
 */ 

 var assetLoader = (function(){
     //image asset dictionary
     this.ImgAssets      = {
         "menu"              : "assets/menu.png",
         "sky"               : "assets/sky.png",
         "clouds"            : "assets/clouds.png",
         "trees"             : "assets/trees.png",
         "wizard_normal"     : "assets/wizard.png"

         //add more image names and files here
     };
     var assetsLoaded = 0; //how many loaded assets
     var numImgAssets = Object.keys(this.ImgAssets).length; //total number of image assets
     this.totalAssets = numImgAssets; //total number of assets
     console.log('YEET YEET YEET YEET YEET');
     console.log(`this.totalAssets: ${this.ImgAssets}`);


     /** 
      * Ensure all assets are loaded before using them
      * @param {number} dic - dictionary name ('assets') 
      * @param {number} name - asset name in the dictionary
      */
     function AssetLoaded(dic, name) {
         //don't count assets already loaded
         if (this[dic][name].status !== "loading" ) {
             return;
         }
         this[dic][name].status = "loaded";
         assetsLoaded ++;
         //finished callback'
         console.log(`HELLO this.totalAssets: ${this.totalAssets}`);
         if (assetsLoaded === this.totalAssets && typeof this.finished === "function") {
             console.log('this.finished() shoud call here!');
             this.finished();
         }
     }
    /**
    * Create assets, set callback for asset loading, set asset source
    */
     this.downloadAll = function() {
         var _this = this;
         var src;
         // load images
         for (var img in this.ImgAssets) {
             if (this.ImgAssets.hasOwnProperty(img)) {
                 src = this.ImgAssets[img];
                 //createa closure for event binding
                 (function(_this, img) {
                     _this.ImgAssets[img] = new Image();
                     _this.ImgAssets[img].status = "loading";
                     _this.ImgAssets[img].name = img;
                     console.log("YOOT YOOT YOOT");
                     _this.ImgAssets[img].onload = function() { AssetLoaded.call(_this, "ImgAssets", img) };
                     _this.ImgAssets[img].src = src;
                     
                })(_this, img);
             }
         }
     }
     return {
         imgs: this.ImgAssets,
         totalAssets: this.totalAssets,
         downloadAll: this.downloadAll
     };
 })();

 assetLoader.finished = function() {
     startGame();
 }

 /**
 * Creates a SpriteSheet
 * @param {string} - File path to the image.
 * @param {number} - Width (in px) of each frame.
 * @param {number} - Height (in px) of each frame.
 */
 function SpriteSheet(path, frameWidth, frameHeight) {
    this.image = new Image();
    this.frameWidth = frameWidth;
    this.frameHeight = frameHeight;
    //calculate the number of frames in a row after the image loads
    var self = this;
    this.image.onload = function() {
        self.framesPerRow = Math.floor(self.image.wifth / self.frameWidth);
    };
    this.image.src = path;
 }

 /**
 * Creates an animation from a spreadsheet.
 * @param {SpriteSheet} - The spritesheet used to create the animation.
 * @param {number}      - Number of frames to wait for before transitioning the animation
 * @param {array}       - Range or sequence of frame numbers for the animation.
 * @param {boolean}     - Repeat the animation once completed.
 */
 function Animation(spritesheet, frameSpeed, startFrame, endFrame) {
    var animationSequence = [];  // array holding the order of the animation
    var currentFrame = 0; //the current frame to draw
    var counter = 0; //keep track of frame rate
    //start and end range for frames
    for (var frameNumber = startFrame; frameNumber <= endFrame; frameNumber++) 
        animationSequence.push(frameNumber);
    /**
     * Update the animation
     */
    this.update = function() {
        //update to the next frame if it is time
        if (counter == (frameSpeed - 1 )) {
            currentFrame = (currentFrame + 1) % animationSequence.length;
        }
        //update the counter
        counter = (counter + 1) % frameSpeed;
    };
    /**
     * Draw the current frame
     * @param {integer} x - X position to draw
     * @param {integer} y - Y position to draw
     */
    this.draw = function(x, y) {
        //get the row and col of the frame
        var row = Math.floor(animationSequence[currentFrame] / spritesheet.framesPerRow);
        var col = Math.floor(animationSequence[currentFrame] / spritesheet.framesPerRow);

        ctx.drawImage(
            spritesheet.image,
            col * spritesheet.frameWidth, row * spritesheet.frameHeight,
            spritesheet.frameWidth, spritesheet.frameHeight,
            x, y,
            spritesheet.frameWidth, spritesheet.frameHeight);
    };
 }

 /*
 * Load the main menu
 */
 assetLoader.finished = function() {
    mainMenu();
 }

/**
     * Draw the sprite at it's current position
     */
    this.draw = function() {
        ctx.save();
        ctx.translate(0.5,0.5);
        ctx.drawImage(assetLoader.imgs[this.type], this.x, this.y);
        ctx.restore();
      };

 function assetProgress(progress, total) {
    var pBar = document.getElementById('progress-bar');
    pBar.value = progress / total;
    document.getElementById('p').innerHTML = Math.round(pBar.value * 100) + "%";
  }

 /*
 * Show the main meu after we finish loading assets
 */
 function mainMenu() {
    $('#main').show();
    $('#progress').hide();
    $('#menu').addClass('main');
 }

 /*
 * Click handlers for the different menu screens
 */

 $('.play').click(function() {
     $('#menu').hide();
     startGame();
 });

 var main = document.getElementById('main');

 //hide element

 function hide(el) {
    el.style.display = 'hide';
 }

 //show element

 function show(el) {
    el.style.display = 'block';
 }

 //show the main meny after all assets are loaded

 function mainMenu() {
    show(main);
 }

 //Click handlers for the various menu screens

 document.querySelectorAll('.play')[0].addEventListener('.click', function() {
    hide(main);
    startGame();
 });

 function startGame() {
    background.reset();
    animate();
 }

 function animate() {
    requestAnimFrame(animate);
    background.draw();
 }

 assetLoader.downloadAll();
}
(jQuery));