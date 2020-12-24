---
title: Files
body: |
    Files loaded from the system. Doesn't load on static sites.
---

# Files

The server acts as a file explorer for all drives on the system. Renderers for files can only be set in the [defaults](/webdir/configuration/defaults#file-defaults) under the `exchange_renderers` setting in [front matter](/webdir/files/front-matter#exchange-renderers).

Files will be placed under the files context specified in the [configuration](/webdir/configuration/configuration#files-context).

**Example:** The `C://` drive would be accesible at `localhost:8080/files/C:/` (if the default files context was used).