# Files

The server acts as a file explorer for all drives on the system. Renderers for files can only be set in the [defaults](/webdir/generator/defaults#file-defaults) under the `exchange_renderers` setting in [front matter](/webdir/front-matter#exchange-renderers).

Files will be placed under the files context specified in the [configuration](/webdir/configuration#files-context).

**Example:** The `C://` drive would be accesible at `localhost:8080/files/C:/` (if the default files context was used).