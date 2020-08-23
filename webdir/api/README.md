---
---
# Creating A Plugin

## Main Class

The main class for your plugin can be any name, but it must extend `WebDirPlugin`.


```java
public class Plugin extends WebDirPlugin {

    /*  Do not override this method. 

        The super method is what allows the plugin to 
        communicate with WebDir.
    */
    public Plugin(PluginService service){
        super(service);
    }

    @Override
    public void onEnable(){

    }

}
```

## Plugin.yml

The `plugin.yml` file tells WebDir how to load the plugin and where the main class is. This file must be saved in the top level of the resources folder.

```yml
# The name of the plugin. required
name: PluginName
# The location of the main class. required
main: Plugin

# Version number. optional
version: 1.0
# Authors. optional
authors:
  - Katsute

# Dependencies. optional
dependencies:
```

All the settings can be retrieved using the `getPluginYml` method in the plugin. 

## Compiling

All WebDir plugins must be compiled in JDK11+, older versions not supported.