# Renderer

A renderer determines how content will appear based on the template and any previous renderers that may have already ran.

```java
public class PluginRenderer implements Renderer{

    @Override
    String renderer(File output, ConfigurationSection yamlFrontMatter, String content){
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

<!-- exchange -->
# Exchange Renderer

**Exchange renderers are only compatible with WebDir Server.**

An exchange renderer inherits all the features of a renderer and extends these features to [exchanges](/simplehttpserver/handler/simple-http-exchange). 

```java
public class PluginRenderer implements ExchangeRendererAdapter{

    @Override
    String renderer(File output, ConfigurationSection yamlFrontMatter, String content){
        return content;
    }

    @Override
    String renderer(SimpleHttpExchange exchange, File source, ConfigurationSection yamlFrontMatter, String content){
        return content;
    }

}
```

The renderer can then be accessed by templates in the `exchangeRenderers` setting in [front matter](/webdir/generator/front-matter).

```yml
---
exchangeRenderers:
  - pluginExchangeRenderer
---
```

If there are duplicate renderers then the plugin name can also be provided.

```yml
---
exchangeRenderers:
  - plugin: Plugin
    renderer: pluginExchangeRenderer
---
```

## Permissions

If you want to use [permissions](/webdir/server/permissions) for the renderer then you must extend a `ExchangeRenderer`. The permission can not contain the `!`, or `*` symbol.

```java
public class PluginRenderer extends ExchangeRenderer{

    public PluginRenderer(){
        super("required.permission");
    }

}
```

<!-- file -->
# File Renderer

**Exchange renderers are only compatible with WebDir Server.**

An exchange renderer inherits all the features of a renderer and extends these features to [files](/webdir/server/files) being viewed on the server. 

```java
public class PluginRenderer implements FileRendererAdapter{

    @Override
    String renderer(File output, ConfigurationSection yamlFrontMatter, String content){
        return content;
    }

    @Override
    String renderer(SimpleHttpExchange exchange, File source, ConfigurationSection yamlFrontMatter, byte[] bytes){
        return new String(bytes);
    }

}
```

The renderer can only be accessed in [defaults](/webdir/generator/defaults#file-defaults) under the `exchangeRenderers` setting in [front matter](/webdir/generator/front-matter).

```yml
---
exchangeRenderers:
  - pluginFileRenderer
---
```

If there are duplicate renderers then the plugin name can be provided.

```yml
---
exchangeRenderers:
  - plugin: Plugin
    renderer: pluginFileRenderer
---
```

## Permissions

If you want to use [permissions](/webdir/server/permissions) for the renderer then you must extend a `FileRenderer`. The permission can not contain the `!`, or `*` symbol.

```java
public class PluginRenderer extends FileRenderer{

    public PluginRenderer(){
        super("required.permission");
    }

}
```