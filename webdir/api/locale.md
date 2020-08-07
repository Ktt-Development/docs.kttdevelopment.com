# Locale

A `LocaleBundle` is used to add support to multiple languages for the plugin. A locale bundle can be retrieved using the `getLocaleBundle` method in the plugin.

The resource parameter is the name of the locale bundle file without any locale codes.

**Example:**
```java
public class Plugin extends WebDirPlugin{

    public Plugin(PluginService service){
        super(service);
    }

    @Override
    public void onEnable(){
        /* This would create a locale bundle of all the 'bundle' files.
                ↓
            - bundle.properties
            - bundle_en.properties
            - bundle_en_US.properties
        */
        LocaleBundle bundle = getLocaleBundle("bundle");
    }

}
```

A locale bundle will search for the nearest matching locale file available. The default language is `English (US)`.

**Example:**
```
bundle_jp_JA_UNIX.properties
bundle_jp_JA.properties
bundle_jp.properties
bundle_en_US.properties
bundle_en.properties
bundle.properties
```

## Localized Strings

To obtain localized strings from the bundle you use the `getString` method inside the locale bundle. This returns a String in the language that WebDir is currently set to. 

``` java
public class Plugin extends WebDirPlugin{

    @Override
    public void onEnable(){
        LocaleBundle bundle = getLocaleBundle("bundle");

        String localized_string = bundle.getString("localizedString");
    }

}
```