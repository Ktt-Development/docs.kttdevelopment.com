# Renderer

A renderer determines how content will appear based on the template and any previous renderers that may have already ran.

```java
public class PluginRenderer extends Renderer{

    @Override
    String render(File input, File output, ConfigurationSection yamlFrontMatter, String content){
        return content;
    }

}
```

To add a renderer to your plugin you use the `addRenderer` method. A renderer name is required.

```java
public class Plugin extends WebDirPlugin{

    public Plugin(PluginService service){
        super(service);
    }

    @Override
    public void onEnable(){
        addRenderer("pluginRenderer", new PluginRenderer());
    }

}
```
The renderer can then be accessed by templates in the `renderers` setting in [front matter](/webdir/generator/front-matter).

```yml
---
renderers:
  - pluginRenderer
---
```

If there are duplicate renderers then the plugin name can also be provided.

```yml
---
renderers:
  - plugin: Plugin
    renderer: pluginRenderer
---
```

<!-- server -->
# Server Renderer

**Server renderer are only compatible with WebDir Server.**

The server renderer acts the same as a standard renderer but has an additional server parameter.

```java
public class PluginRenderer extends Renderer{

    @Override
    String render(SimpleHttpServer server, File input, File output, ConfigurationSection yamlFrontMatter, String content){
        return content;
    }

}
```

This renderer can also be accessed in the renderers.
```yml
---
renderers:
  - pluginServerRenderer
---
```

<!-- exchange -->
# Exchange Renderer

**Server renderer are only compatible with WebDir Server.**

The exchange renderer acts the same as a standard renderer but runs during an http exchange instead of at the initial build stage.

```java
public class PluginRenderer extends Renderer{

    @Override
    String render(SimpleHttpExchange exchange, File input, File output, ConfigurationSection yamlFrontMatter, String content){
        return new String(bytes);
    }

}
```

This renderer is accessed in exchange renderers. All previous renderers can also be added here if you want to run them during an exchange.
```yml
---
exchangeRenderers:
  - pluginExchangeRenderer
---
```

<!-- file -->
# File Renderer

**Server renderer are only compatible with WebDir Server.**

The exchange renderer acts the same as a standard renderer but runs during an http exchange instead of at the initial build stage.

```java
public class PluginRenderer extends Renderer{

    @Override
    String render(SimpleHttpServer server, SimpleHttpExchange exchange, File input, ConfigurationSection yamlFrontMatter, byte[] bytes){
        return new String(bytes);
    }

}
```

The renderer can only be accessed in [defaults](/webdir/generator/defaults#file-defaults) under the `exchangeRenderers` setting in [front matter](/webdir/generator/front-matter). All previous renderers can also be added here if you want to run them during the exchange.

```yml
---
exchangeRenderers:
  - pluginFileRenderer
---
```