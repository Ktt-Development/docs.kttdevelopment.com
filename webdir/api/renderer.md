# Renderer

A [renderer](https://docs.kttdevelopment.com/webdir/com/kttdevelopment/webdir/api/Renderer.html) determines how content will appear based on the template and any previous renderers that may have already ran.

```java
public class PluginRenderer extends Renderer{

    @Override
    public byte[] render(final FileRender render){
        return super.render(render);
    }

}
```

To add a renderer to your plugin you use the [`addRenderer`](https://docs.kttdevelopment.com/webdir/com/kttdevelopment/webdir/api/WebDirPlugin.html#addRenderer(java.lang.String,com.kttdevelopment.webdir.api.Renderer)) method. A renderer name is required.

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
The renderer can then be accessed by templates in the `renderers` setting in [front matter](/webdir/front-matter).

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

# Exchange Renderer

The exchange renderer acts the same as a standard renderer but only runs on the server.

```java
public class PluginRenderer extends Renderer{

    @Override
    public byte[] render(final FileRender render){
        SimpleHttpServer server = render.getServer();
        SimpleHttpExchange exchange = render.getHttpExchange();

        return super.render(render);
    }

}
```

This renderer can be used under both the `renderers` and `exchange_renderers` tag, but the server and exchange will only be accesible using [defaults](/webdir/defaults#defaults).
```yml
exchange_renderers:
  - pluginExchangeRenderer
```

# File Renderer

For renders using the file explorer, either render can be used but they must be listed under the `exchange_renderers` tag in [defaults](/webdir/defaults#file-defaults) in order to run.

