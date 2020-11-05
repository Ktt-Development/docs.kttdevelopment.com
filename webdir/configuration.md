# Configuration

## Safemode

Running in safe mode will disable plugin loading.

```yml
# Safe mode disables plugin loading.
# Default: false
safe: false
```

## Lang

The languge of the application can be changed to any supported locale code. Any unsupported languages will automatically resolve to English (US).

```yml
# The Language that the application will use for logging.
# Default: en_US
lang: en_US
```

## Directories

All the directories that WebDir uses can be changed accordingly.

```yml
# The folder where plugins will be loaded from.
# Default: _plugins
plugins: _plugins

# The folder where files will be loaded from.
# Default: _root
sources: _root

# The folder where defaults will be loaded from.
# Default: _default
default: _default

# The folder where file renders will be saved.
# Default: _site
output: _site
```

## Clean

Clean mode will clear the output directory before rendering any files.

```yml
# Whether to clear the output directory before rendering files.
# Default: true
clean: true
```

## Server

The server enables the usage of the [file explorer](#files-context) and exchange renderer feature.

```yml
# Whether to run a server or not.
# Default: false
server: false

# The port to run the server at.
# Default: 80
port: 80
```

## Files Context

The files context is where files from your computer will be served at.

```yml
# The context to view files at.
# Ex: setting this to 'files' would put files from C://* at http://localhost/files/C:/*
# Default: files
context: files
```

## Permissions

For public servers [permissions](/webdir/permissions) can be used to deliver different renders to different users.

```yml
# The file to load permissions from (server only).
# Default: permissions.yml
permissions: permissions.yml
```