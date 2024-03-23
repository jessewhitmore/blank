import { Sprite, DisplacementFilter } from '/assets/js/pixi.min.js'

export function addDisplacementEffect(app, addTo) {
    // create sprite from the preloaded shit
    const sprite = Sprite.from('texture2')

    // allow to wrap
    sprite.texture.baseTexture.wrapMode = 'repeat'
    
    // set the displacement filter settings
    const dis = new DisplacementFilter({
        sprite,
        scale: 20,
    })
    
    const filters = [dis]

    // apply filter to stage
    addTo.filters = filters
}