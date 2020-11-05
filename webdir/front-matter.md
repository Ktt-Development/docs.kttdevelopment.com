# Front Matter

In order to pass settings to renderers and actually use renderers, source files use yaml front matter. Any settings set in these files will be available to [renderers](/webdir/api/renderer) in the `yamlFrontMatter` parameter.

# Renderers

Renderers will run in the order that they are provided in. For renderers with duplicate names the plugin name can also be supplied.

```yml
---
renderer:
  - renderName
  - pluginName: pluginName
    renderer: rendererName
---
```

## File Renderers

File renderers use [defaults](/webdir/defaults#file-defaults) instead of front matter.

# Imports

To share settings across multiple files imports can be used. Absolute imports will look in the directory that the sources folder is in.

```yml
---
import: /import.yml
---
```

Relative imports can also be used to import files based on the location of that particular file.

```yml
---
import_relative: /import.yml
---
```