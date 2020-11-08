# Defaults

If you want to use the same settings across a wide range of files without tons of import statements, defaults can be used. These are yml files and they are saved in the defaults directory specified in the [configuration](/webdir/configuration#directories).

The index determines in what order defaults are used in (for files that use multiple defaults). 

The scope determines which files use the default file. There are two wild cards, `!` for negation and `*` for any. Negation must be the first character to work correctly; the any can be placed anywhere in the string.

Any files that match the scope will inherit all the settings in the file. Import statements can also be used here.

```yml
default:
  index: 1
  scope:
    # Not file.html
    - "!/file.html"
    # Any .html file
    - "*.html"
    # Not any css file
    - "!*.css"
renderers: 
  - rendererName
```

# File Defaults

Files do not have front matter so defaults must be used. Note that the scope for drives start with a slash and include the colon:

**Example** `C://` would have a scope of `/C:/*`.

```yml
default:
  index: 1
  scope:
    # Any file in c drive
    - "/C:/*"
exchange_renderers:
  - fileRendererName
```
