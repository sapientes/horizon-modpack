![pseudosharp](https://github.com/nyxmc/pseudoscience-modpack/assets/107522398/d1e10431-590f-40ca-bf63-5537f47577f1)

# pseudoscience-modpack

## Manual Changes

Set the values in server.properties according to the server.properties in include/  

## Installation on launchers besides Prism

> [!IMPORTANT]  
> The supplied pack is **incompatible with MultiMC** as it doesn't support Java agent components.  
> Use Prism instead or install manually using the method below.

> [!NOTE]  
> If you're using Curseforge, download the Curseforge Pack from the releases. Then continue with step 4.

This should work with all common launchers, however, installing with a launcher other than Prism isn't actively supported.  

1) Download the latest unsup.jar from https://git.sleeping.town/unascribed/unsup/releases
2) Place this file into the .minecraft folder along with the [unsup.ini](include/unsup.ini)
3) Rename the jar to `unsup.jar`
4) Add `-javaagent:unsup.jar` to the JVM arguments

### Setting the JVM arguments

#### In Curseforge App

![](include/cf-jvm-args.png)

> [!IMPORTANT]  
> This will break **all** other modpacks, causing them to not start anymore. It is better to edit the installation in the Minecraft launcher directly.


#### In the official launcher

Under JVM arguments, go to the very right with your arrow keys and enter `-javaagent:unsup.jar`, making sure to add a space between the last argument and this one. 
![](include/jvm-args.png)

If you're not using this together with Curseforge, ideally create a new instance. Otherwise, edit the instance created by Curseforge.


