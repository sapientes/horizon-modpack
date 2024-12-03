default: build

# Build the prism pack
prism:
    #!/usr/bin/env bash
    set -euxo pipefail

    cd include/Prism
    cp ../unsup.ini .minecraft

    zip -r Prism.zip * .minecraft

    mv Prism.zip ../../build/Chilly.Peaks.Modpack.Prism.zip
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
    packwiz cf export -y -o ../../build/Chilly.Peaks.Modpack.Curseforge.zip

# Build a profile for the vanilla launcher
launcher:
    #!/usr/bin/env zsh
    set -euxo pipefail

    eval "$(tombl -e VERSIONS=versions pack.toml)"

    export ITERATION=$(git rev-parse --abbrev-ref HEAD | cut -c 2-)
    export MC_VERSION=${VERSIONS[minecraft]}
    export FORGE_VERSION=${VERSIONS[forge]}

    cat include/Launcher/profile.json.template | envsubst | tee include/Launcher/profile.json

# Load mods from modlist
modlist:
    #!/usr/bin/env bash
    set -euxo pipefail

    rm -rf mods/*
    packwiz refresh

    for link in $(grep '\- ' Modlist.md | sed 's/- //'); do
        if [[ -z $(echo "$link" | grep modrinth) ]]; then
            packwiz cf install -y "$link"
        else
            packwiz mr install -y "$link"
        fi
    done

# Build all packs
build: prism curseforge launcher
