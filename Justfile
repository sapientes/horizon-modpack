default: build

# Set the envs of some mods correctly, overwriting them
fix-envs:
    #!/usr/bin/env bash
    set -euxo pipefail

    sed -i 's/^side = "client"/side = "both"/' mods/jei.pw.toml
    sed -i 's/^side = "client"/side = "both"/' mods/create-questing.pw.toml
    sed -i 's/^side = "client"/side = "both"/' mods/do-a-barrel-roll.pw.toml
    sed -i 's/^side = "client"/side = "both"/' mods/just-enough-resources-jer.pw.toml
    
    sed -i 's/^side = "both"/side = "client"/' mods/music-manager.pw.toml

    packwiz refresh

# Build the prism pack
prism:
    #!/usr/bin/env bash
    set -euxo pipefail
    
    cd include/Prism
    cp ../unsup.ini .minecraft
    
    zip -r Prism.zip * .*
    
    mv Prism.zip ../../build/Pseudoscience.SMP.Modpack.Iteration.1.Prism.zip
    rm .minecraft/unsup.ini

# Build the cf pack
curseforge:
    #!/usr/bin/env bash
    set -euxo pipefail

    cp pack.toml include/Curseforge
    
    cd include/Curseforge
    touch index.toml

    wget https://git.sleeping.town/unascribed/unsup/releases/download/v0.2.3/unsup-0.2.3.jar -O unsup.jar
    cp ../unsup.ini .

    packwiz refresh
    packwiz cf export -y -o ../../build/Pseudoscience.SMP.Modpack.Iteration.1.Curseforge.zip

# Build all packs
build: fix-envs prism curseforge
