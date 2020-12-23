---
title: Accesing the Server
body: |
    Guide to connecting to the server.
---
# Accessing The Server

## Accessing On My Machine

When a server is started it is immediately available on your local address at the server is binded to.

**Examples:** `localhost:8080`, `127.0.0.1`

This is known as the *localhost* and is only available on your machine.

## Accessing On My Internet Network

The server also broadcasts to all computers on your immediate internet network and is accessible by using your machines' *local ip address*. You can find out more [here](https://www.google.com/search?q=How+to+find+my+local+ip+address).

## Accessing Outsite My Internet Network

For clients not connected to your network they must use your [*public ip address*](https://www.whatismyip.com/what-is-my-public-ip-address).

People outside your network can not connect unless you *port forward* the port the server is using. This process varies depending on your ISP and can often leave your network vulnerable to attackers. It is not suggested to this unless you know what you are doing.

You can learn to port forward [here](https://www.google.com/search?q=How+to+port+forward).