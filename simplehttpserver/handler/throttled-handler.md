---
---
# Throttled Handler

The throttled handler limits the amount of simultaneous connections to a handler. The handler requires a `ConnectionThrottler`, which determines how to allocate the connections.

This feature can be used to limit the downloading of files from the server, since downloads run simultaneously.

**By default the server runs requests in series; you must use a [multithreaded server](/simplehttpserver/server/multithreaded-server) for the throttler to work properly.**

<!-- exchange -->
# Exchange Throttler

The exchange throttler limits the amount of simultaneous connections a single address can have. This limit is determined by the `getMaxConnections` method in the throttler.

A value of `0` means no connections allowed and `-1` means unlimited connections allowed.

```java
HttpHandler handler =  new HttpHandler(){

    @Override
    public void handle(HttpExchange httpExchange){
        // handle exchange
    }

};

ExchangeThrottler throttler = new ExchangeThrottler(){

    @Override
    public int getMaxConnections(HttpExchange exchange){
        // only allow user to have two simultaneous exchanges
        return 2;
    }

};

HttpServer server = HttpServer.create(8080);
server.createContext("/", new ThrottledHandler(handler, throttler));

```

## Server Exchange Throttler

The server exchange throttler is the same as the exchange throttler but also has a limit on the total connections the server can have simultaneously. This limit is determined in the `setMaxServerConnections` method on the throttler.

A value of `0` means no connections allowed and `-1` means unlimited connections allowed.

An exchange can be exempt from the server limit if they return true in the `canIgnoreConnectionLimit` method of the throttler.

```java
HttpHandler handler =  new HttpHandler(){

    @Override
    public void handle(HttpExchange httpExchange){
        // handle exchange
    }

};

ServerExchangeThrottler throttler = new ServerExchangeThrottler(){

    @Override
    public int getMaxConnections(HttpExchange exchange){
        // only allow user to have two simultaneous exchanges
        return 2;
    }

    @Override
    public boolean canIgnoreConnectionLimit(HttpExchange exchange){
        // make all users exempt from server connection limit
        return true;
    }

};
// only allow one connection to access the server at any time
throttler.setMaxServerConnections(1);

HttpServer server = HttpServer.create(8080);
server.createContext("/", new ThrottledHandler(handler, throttler));
```

<!-- session -->
# Session Throttler

**This handler will only function with a [SimpleHttpServer](/simplehttpserver/server).**

The session throttler limits the amount of simultaneous connections a single session can have. This limit is determined by the `getMaxConnections` method in the throttler.

A value of `0` means no connections allowed and `-1` means unlimited connections allowed.

A [HttpSessionHandler](/simplehttpserver/http-session#http-session-handler) is required in order the handler to retrive sessions from the server. See [HttpSession](/simplehttpserver/http-session) for more details.

```java
HttpHandler handler = new HttpHandler(){

    @Override
    public void handle(HttpExchange httpExchange){
        // handle exchange
    }

};

HttpSessionHandler sessionHandler = new HttpSessionHandler();

SessionThrottler throttler = new SessionThrottler(sessionHandler){

    @Override
    public int getMaxConnections(HttpSession session, HttpExchange exchange){
        // only allow session to have two simultaneous exchanges
        return 2;
    }

};

SimpleHttpServer server = SimpleHttpServer.create(8080);
server.setHttpSessionHandler(sessionHandler);

server.createContext("/", new ThrottledHandler(handler, throttler))
```

## Server Session Throttler

The server session throttler is the same as the session throttler but also has a limit on the total connections the server can have simultaneously. This limit is determined in the `setMaxServerConnections` method on the throttler.

A value of `0` means no connections allowed and `-1` means unlimited connections allowed.

An exchange can be exempt from the server limit if they return true in the `canIgnoreConnectionLimit` method of the throttler.

```java
HttpHandler handler =  new HttpHandler(){

    @Override
    public void handle(HttpExchange httpExchange){
        // handle exchange
    }

};

HttpSessionHandler sessionHandler = new HttpSessionHandler();

ServerSessionThrottler throttler = new ServerSessionThrottler(sessionHandler){

    @Override
    public int getMaxConnections(HttpSession session, HttpExchange exchange){
        // only allow session to have two simultaneous exchanges
        return 2;
    }

    @Override
    public boolean canIgnoreConnectionLimit(HttpSession session, HttpExchange exchange){
        // make all sessions exempt from server connection limit
        return true;
    }

};
// only allow one connection to access the server at any time
throttler.setMaxServerConnections(1);

SimpleHttpServer server = SimpleHttpServer.create(8080);
server.setHttpSessionHandler(sessionHandler);

server.createContext("/", new ThrottledHandler(handler, throttler));
```

### [Help: Multithreaded server is not processing requests in parallel.](/simplehttpserver/server/adding/multithreaded-server#Help-Multithreaded-server-is-not-processing-requests-in-parallel)