ServerEvents.recipes(event => {
    event.recipes.create.cutting([Item.of('4x minecraft:iron_ingot')], 'minecraft:iron_trapdoor')
    event.recipes.create.crushing([Item.of('4x minecraft:lapis_lazuli')], 'supplementaries:lapis_bricks')
})