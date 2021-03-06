---
title: Creating A Server
body: |
    Quick start guide for creating a [`SimpleHttpServer`](/simplehttpserver/documentation/com/kttdevelopment/simplehttpserver/package-summary.html).
---
# Creating A Simple Http Server

A simple http server is created the same way that a native http server is created; using the [`create`](/simplehttpserver/documentation/com/kttdevelopment/simplehttpserver/SimpleHttpServer.html#create()) method.

```java
SimpleHttpServer server = SimpleHttpServer.create();
// https
SimpleHttpsServer hserver = SimpleHttpsServer.create();
```

# Binding To A Port

In order to start the server it must be binded to a port. The port can be binded using an Integer or an [`InetSockedAddress`](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/net/InetSocketAddress.html).

```java
SimpleHttpServer server = SimpleHttpServer.create(8080);
```
```java
SimpleHttpServer server = SimpleHttpServer.create(new InetSocketAddress(8080));
```

If the server is not binded at instantiation then it must be binded using the [`bind`](/simplehttpserver/documentation/com/kttdevelopment/simplehttpserver/SimpleHttpServer.html#bind(java.net.InetSocketAddress,int)) method.
```java
SimpleHttpServer server = SimpleHttpServer.create();
server.bind(8080);
```
```java
SimpleHttpServer server = SimpleHttpServer.create();
server.bind(new InetSocketAddress(8080));
```

Note that the server can only be binded to a port once. You must create a new server if you intend to change the port.

If the port that the server is currently using is already occupied by another process then a [`BindException`](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html) will be thrown.

# Starting The Server

The server can be started using the [`start`](/simplehttpserver/documentation/com/kttdevelopment/simplehttpserver/SimpleHttpServer.html#start()) method. The server can not be started unless it is binded to a valid port.
```java
SimpleHttpServer server = SimpleHttpServer.create(8080);
server.start();
```

# Stopping The Server

The server can be stopped using the [`stop`](/simplehttpserver/documentation/com/kttdevelopment/simplehttpserver/SimpleHttpServer.html#stop()) method. This will stop all inbound requests and currently active exchanges. An optional Integer parameter can also be supplied to specify how long to wait for current exchanges to complete before closing the server.

```java
SimpleHttpServer server = SimpleHttpServer.create(8080);
server.start();
// stop all exchanges
server.stop();
```
```java
SimpleHttpServer server = SimpleHttpServer.create(8080);
server.start();
// stop current exchanges after 10 seconds
server.stop(10);
```
