---
---
# Configuration

A configuration can be created using the `createConfiguration` method in the plugin which returns a `ConfigurationSecton`. This can not be saved.

```java
public class Plugin extends WebDirPlugin{
    
    public Plugin(PluginService service){
        super(service);
    }

    @Override
    public void onEnable(){
        ConfigurationSection config = createConfiguration(new File(getPluginFolder().getPath() + "/config.yml"));
    }

}
```

Configurations must be `yml` files; the syntax can be found [here](https://en.wikipedia.org/wiki/YAML#Syntax).