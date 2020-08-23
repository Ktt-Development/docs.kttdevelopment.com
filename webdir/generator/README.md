---
---
# Web Dir Generator

The Web Dir Generator generates pages from templates and [renderers](/webdir/api/renderer).

## Configuration

```yml
# In safemode the generator will skip loading plugins.
safemode: false

# The language that the program will run in.
locale: en_us

# The folder where plugins will be laoded from.
plugins_dir: .plugins

# The folder where files will be loaded from.
source_dir: .root

# The folder where default templates will be loaded from.
default_dir: .default

# The output folder where rendered files will be saved.
output_dir: _site

# Whether the server should clear the output directory or not.
clean: true

# If a server should be started to preview changes in realtime.
preview: false

# The port that the server will run on.
port: 80
```