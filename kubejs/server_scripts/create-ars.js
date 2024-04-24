ServerEvents.recipes(event => {
    event.recipes.ars_nouveau.imbuement(
        "create:experience_nugget",
        "ars_nouveau:experience_gem",
        250,
        []
    )
    event.recipes.create.crushing(['create:experience_nugget'], 'ars_nouveau:experience_gem')
    event.recipes.create.crushing([Item.of('experience_nugget', 4)], 'ars_nouveau:greater_experience_gem')
})