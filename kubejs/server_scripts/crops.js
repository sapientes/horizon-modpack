
ServerEvents.recipes(event => {
    event.shapeless(
        Item.of('create:cinder_flour', 1),
        [
            'gardens_of_the_dead:whistlecane'
        ]
    )
    event.recipes.create.crushing(['create:cinder_flour', 1, Item.of('create:cinder_flour', 1).withChance(0.75)], 'gardens_of_the_dead:whistlecane')
    event.recipes.create.milling(['create:cinder_flour', 1, Item.of('create:cinder_flour', 1).withChance(0.75)], 'gardens_of_the_dead:whistlecane')
    event.shaped(
        Item.of('minecraft:stick', 2),
        [
            '1  ',
            '1  ',
            '   '
        ],
        {
            1: 'gardens_of_the_dead:whistlecane',
        }
    )
})
