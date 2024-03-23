import { Assets, Sprite, Container, Graphics } from '/assets/js/pixi.min.js';
import { addBackground } from './addBackground.js';
import { addDisplacementEffect } from './addDisplacementEffect.js';
const app = jwCore.app

// default setup
async function setup() {

    await app.init({
        background: '#1099bb',
        resizeTo: window
    })
    
    document.body.appendChild(app.canvas)

}

// preload assets
async function preload() {

    const assets = [
        { alias: 'background', src: '/assets/img/girl.jpg' },
        { alias: 'texture1', src: '/assets/img/gau.jpg' },
        { alias: 'texture2', src: '/assets/img/block.jpg' },
    ]

    await Assets.load(assets)

    console.log(assets)

}

// on run
(async () => {
    const containers = []
    await setup()
    await preload()


    const bg = new Container()
    containers.push(bg)
    const glass = new Container()
    containers.push(glass)
    
    addBackground(app, bg)
    addBackground(app, glass)

    addDisplacementEffect(app, glass)


    const mask = new Graphics();
    mask.beginFill(0xffffff); // Fill color of the mask (can be any color)
    mask.drawRect(0, 0, app.screen.width, app.screen.height); // Define a rectangle as the mask (x, y, width, height)
    mask.endFill();
    
    glass.mask = mask

    containers.forEach(v=> app.stage.addChild(v))


})();

// Load images
// PIXI.Loader.shared.add('image', 'path/to/image.jpg');
// PIXI.Loader.shared.add('displacementMap', 'path/to/displacementMap.jpg');
// PIXI.Loader.shared.load((loader, resources) => {
//     // Create sprite for the image
//     const imageSprite = new PIXI.Sprite(resources.image.texture);
//     app.stage.addChild(imageSprite);

//     // Create displacement filter
//     const displacementFilter = new PIXI.filters.DisplacementFilter(resources.displacementMap.texture);

//     // Apply displacement filter to the image sprite
//     imageSprite.filters = [displacementFilter];

//     // Adjust displacement filter parameters
//     displacementFilter.scale.x = 20;
//     displacementFilter.scale.y = 20;
// });