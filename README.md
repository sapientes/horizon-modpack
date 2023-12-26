## Manual Changes

Set the values in server.properties according to the server.properties in include/  

## Installation on launchers besides Prism

> [!warn] A note on MultiMC
> The supplied pack is **incompatible with MultiMC** as it doesn't support Java agent components.
> Use Prism instead or install manually using the method below.

This should work with all common launchers, however, installing with a launcher other than Prism isn't actively supported.  

1) Download the latest unsup.jar from https://git.sleeping.town/unascribed/unsup/releases
2) Place this file into the .minecraft folder along with the [unsup.ini](include/unsup.ini)
3) Rename the jar to `unsup.jar`
4) Add `-javaagent:unsup.jar` to the JVM arguments
