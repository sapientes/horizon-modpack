ServerEvents.recipes(event => {
    event.recipes.ars_nouveau.enchantment(
        [
            "minecraft:ender_pearl",
            "minecraft:ender_eye",
            "minecraft:ender_pearl",
            "minecraft:ender_eye",
        ], // input items
        "respawnobelisks:obeliskbound", // applied enchantment
        1, // enchantment level
        2500, // source cost
    )
    event.recipes.ars_nouveau.enchantment(
        [
            "minecraft:ender_pearl",
            "minecraft:ender_eye",
            "ars_nouveau:experience_gem",
            "minecraft:ender_pearl",
            "minecraft:ender_eye",
            "ars_nouveau:experience_gem"
        ], // input items
        "respawnobelisks:obeliskbound", // applied enchantment
        2, // enchantment level
        5000, // source cost
    )
    event.recipes.ars_nouveau.enchantment(
        [
            "minecraft:echo_shard",
            "minecraft:ender_eye",
            "ars_nouveau:greater_experience_gem",
            "minecraft:echo_shard",
            "minecraft:ender_eye",
            "ars_nouveau:greater_experience_gem"
        ], // input items
        "respawnobelisks:obeliskbound", // applied enchantment
        3, // enchantment level
        7500, // source cost
    )
    event.recipes.ars_nouveau.enchantment(
        [
            "minecraft:echo_shard",
            "minecraft:ender_eye",
            "ars_nouveau:greater_experience_gem",
            "minecraft:end_crystal",
            "minecraft:echo_shard",
            "minecraft:ender_eye",
            "ars_nouveau:greater_experience_gem",
            "minecraft:end_crystal"
        ], // input items
        "respawnobelisks:obeliskbound", // applied enchantment
        4, // enchantment level
        10000, // source cost
    )
})