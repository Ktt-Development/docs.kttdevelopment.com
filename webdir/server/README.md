---
---
# Web Dir Server

The Web Dir Server deploys a dynamic website from templates and [renderers](/webdir/api/renderer).

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

# The port that the server will run on.
port: 80

# The context to view files at.
# Ex: setting this to 'files' would put files from C://* at http://localhost/files/C:/*    ← here
files_context: files

# The permissions file.
permissions: permissions.yml
```