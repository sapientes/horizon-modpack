ServerEvents.tags('item', event => {
  event.add('minecraft:soul_fire_base_blocks', 'quark:soul_bead')
  event.add('forge:eggs', 'minecraft:sniffer_egg', 'minecraft:dragon_egg', 'quark:egg_parrot_red_blue', 'quark:egg_parrot_blue', 'quark:egg_parrot_green', 'quark:egg_parrot_yellow_blue', 'quark:egg_parrot_grey')
  event.add('createaddition:plants', 'gardens_of_the_dead:whistlecane', '#quark:seed_pouch_holdable')
  event.add('quark:seed_pouch_holdable', 'gardens_of_the_dead:whistlecane')
  event.add('forge:ingots', 'create_dd:experience_ingot')
})