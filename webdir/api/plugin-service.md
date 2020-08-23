---
---
# Plugin Service

The plugin service is what allows your plugin to use all the features that WebDir offers.

## Logger

In order for the plugin to log to files correctly they must use the logger provided in the `getLogger` method of the plugin. This logger uses the plugin name when sending messages.

## Plugin Folder

For plugins that use external files, like configurations and data storage, it is recommended to use the plugin folder provided in the `getPluginFolder` method in order to avoid conflicting files across plugins.

This folder is automatically created when the `getPluginFolder` method is used.

## Resources

For files in the resources folder you can use the `getResource` method in the plugin (This is a shortened version of [`ClassLoader#getResourceAsStream`](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/ClassLoader.html#getResourceAsStream(java.lang.String))).