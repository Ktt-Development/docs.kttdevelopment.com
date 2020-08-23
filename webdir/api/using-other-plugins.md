---
---
# Using Other Plugins

In order for your plugin to use the features of another plugin you must specify it in the [`plugin.yml`](/webdir/api/#plugin.yml) file under `dependencies`.

The dependency is the name of the plugin you are trying to load.

```yml
name: TestPlugin
main: Plugin
dependencies:
  - someOtherPlugin
```

To retrieve the plugin you can use the `getPlugin` method in your plugin.

```java
public class TestPlugin extends WebDirPlugin{

    public TestPlugin(PluginService service){
        super(service);
    }

    @Override
    public void onEnable(){
        WebDirPlugin otherPlugin = getPlugin("someOtherPlugin");
    }

}
```