---
title: Installation
body: Setup instructions for Rexedia executable.
---

# Local Installation

[![releases](https://img.shields.io/github/v/release/Ktt-Development/rexedia)](https://github.com/Ktt-Development/rexedia/releases)

# Running Rexedia

When first running Rexedia you may notice that Windows does not recognize the command.

```
C:\Users\Katsute> rexedia
'rexedia' is not recognized as an internal or external command,
operable program or batch file.
```

This behavior is expected, if the application is not added to the system path it can only be accessed by using the full installation path.

Ex: `"C:\Program Files\rexedia\rexedia.exe"`

# Adding Rexedia to the Path

```
C:\Users\Katsute> rexedia
usage: rexedia
 -b,--backup <arg>           Should a backup file be kept of the original
 -c,--cover <arg>            The cover format to use
 -d,--debug <arg>            Run logging in debug mode and create a debug
                             file
...
```