ServerEvents.recipes(event => {
  event.recipes.create.splashing(['9x galosphere:silver_nugget',
    Item.of('galosphere:pink_salt_shard').withChance(0.125)],
    'create:crushed_raw_silver')
  event.blasting('galosphere:silver_ingot', 'create:crushed_raw_silver')
  event.smelting('galosphere:silver_ingot', 'create:crushed_raw_silver')
})