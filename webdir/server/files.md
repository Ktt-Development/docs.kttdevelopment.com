# Files

The Web Dir Server acts as a file explorerer for all drives on the system. Renderers for files can only be set in the [defaults](/webdir/generator/defaults#file-defaults) under the `exchangeRenderers` setting in [front matter](/webdir/generator/front-matter).

Files will be placed under the files context specified in the [configuration](/webdir/server).

**Example:** The `C://` drive would be accesible at `localhost:8080/files/C:/` (if the default files context was used).