---
title: Creating A Plugin
body: |
    Quick start guide for creating a WebDir plugin.
---
# Main Class

The main class for your plugin can be any name, but it must extend [`WebDirPlugin`](/webdir/documentation/com/kttdevelopment/webdir/api/WebDirPlugin.html). This is the class that will initialize the plugin.

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

# Plugin.yml

The `plugin.yml` file tells WebDir how to load the plugin and where the main class is. This file must be saved in the top level of the resources folder.

The information from this class can be obtained using the [`getPluginYml`](/webdir/documentation/com/kttdevelopment/webdir/api/WebDirPlugin.html#getPluginYml()) method.

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

# Logger

In order for the plugin to log to files correctly they must use the logger provided in the [`getLogger`](/webdir/documentation/com/kttdevelopment/webdir/api/WebDirPlugin.html#getLogger()) method of the plugin. This logger uses the plugin name when sending messages.

# Plugin Folder

For plugins that use external files, like configurations and data storage, it is recommended to use the plugin folder provided in the [`getPluginFolder`](/webdir/documentation/com/kttdevelopment/webdir/api/PluginService.html#getPluginFolder()) method in order to avoid conflicting files across plugins.

This folder is automatically created when the [`getPluginFolder`](/webdir/documentation/com/kttdevelopment/webdir/api/PluginService.html#getPluginFolder()) method is used.

# Compiling

All WebDir plugins must be compiled in JDK11, older versions not supported.
You do not need to compile the WebDir API into your jar, nor any of its dependencies; WebDir already has them installed.

If your plugin requires external (non webdir) jars then you must either compile your plugin with the dependency included or load them using the class loader.