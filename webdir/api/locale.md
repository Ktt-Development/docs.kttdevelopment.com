# Locale

A [`LocaleBundle`](/webdir/documentation/com/kttdevelopment/webdir/api/LocaleBundle.html) is used to add support to multiple languages for the plugin. A locale bundle can be retrieved using the [`getLocaleBundle`](/webdir/documentation/com/kttdevelopment/webdir/api/WebDirPlugin.html#getLocaleBundle(java.lang.String)) method in the plugin.

The resource parameter is the name of the locale bundle file without any locale codes.

**Example:** A bundle file with the name `bundle_en_US.yml` would have a resource name of `bundle`.

```java
public class Plugin extends WebDirPlugin{

    public Plugin(PluginService service){
        super(service);
    }

    @Override
    public void onEnable(){
        LocaleBundle bundle = getLocaleBundle("bundle");
    }

}
```

Language bundles will always look for the nearest matching locale file available.

If a locale file is not found for the currently selected language it will attempt to find the closest match by language code and region, before using the closest default locale file.

**Example:**
```
bundle_jp_JA.yml
bundle_jp.yml
bundle_en_US.yml
bundle_en.yml
bundle.yml
```

## Localized Strings

To obtain localized strings from the bundle you use the [`getString`](/webdir/documentation/com/kttdevelopment/webdir/api/LocaleBundle.html#getString(java.lang.String)) method inside the locale bundle. This returns a String in the language that WebDir is currently set to.

``` java
public class Plugin extends WebDirPlugin{

    @Override
    public void onEnable(){
        LocaleBundle bundle = getLocaleBundle("bundle");

        String localized_string = bundle.getString("localizedString");
    }

}
```