---
title: Permissions
body: |
    Permissions allows different content to be displayed depending on the user. Does not work with static sites.
---

# Permissions

Permissions are used to set access to the server and determines which renderers can be used, if the renderer has a required permission.

Permissions and options can set either by user or by group.

## Options

The `default` option determines if all users have the permissions and options by default.

```yml
groups:
  default:
    options:
      # if true all users will inherit these permissions
      default: true
      # custom options can also be added here
      custom_option: 100
    permissions:
      - "example.permission"
```

The `connection-limit` option determines how many simultaneous sessions a user can have. `0` means no connections allowed and `-1` means unlimited.

All plugins have access to the users options (read only).

```yml
groups:
  testGroup:
    options:
      # allow 2 simultaneous connections for users in this group
      connection-limit: 2
```

## Permissions and Wildcards

Permissions are used to restrict features to certain groups and users. There are two wild cards, `!` for negation and `*` for any. Negation must be the first character to work correctly; the any can be placed anywhere in the string. **Double quotes may be required.**

```yml
groups:
  admin:
    permissions:
      # the permission 'permission.example'
      - "permission.example"
      # all permissions starting with 'example.'
      - "example.*"
      # except 'example.permission'
      - "!example.permission"
```

## Inheritance

Inheritance is used to add permissions from another group to that group.

```yml
groups:
  testGroup:
    options:
      connection-limit: 2
    permissions:
      - "permission.example"
  admin:
    inheritance:
      # inherit all options and permissions from group 'testGroup'
      - testGroup
    permissions:
      - "example.permission"
```

# Users

The users tag is used to assign groups to users based on their ip address. They can also have there own permissions and options which overrides any group options. Note that negated permissions can **not** be overriden.

For the local user `127.0.0.1` or `localhost` can be used.

```yml
groups:
  testGroup:
    options:
      connection-limit: 2
    permissions:
      - "permission.example"
  admin:
    inheritance:
      - testGroup
    permissions:
      - "example.permission"
users:
  "127.0.0.1":
    group:
      # use group 'admin'
      - admin
    options:
      # use connection limit '-1' instead of '2'
      connection-limit: -1;
    permissions:
      # grant all permissions
      - "*"
```