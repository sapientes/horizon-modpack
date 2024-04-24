
ServerEvents.recipes(event => {
    event.shapeless(
        Item.of('create:cinder_flour', 1),
        [
            'gardens_of_the_dead:whistlecane'
        ]
    )
    event.recipes.ars_nouveau.crush(
        'gardens_of_the_dead:whistlecane', // input block
        [
            Item.of('create:cinder_flour', 2).withChance(1.0)
            //{ item: Item.of('minecraft:sand').withChance(1.0), maxRolls: 4 }
        ], // loot table
        true // true // drop the item in world?
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