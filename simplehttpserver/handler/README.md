---
layout: folder
title: Handler
body: |
    An [`HttpHandler`](https://docs.oracle.com/en/java/javase/11/docs/api/jdk.httpserver/com/sun/net/httpserver/HttpHandler) is what handles a request when a user accesses a page. This is passed with an [http exchange](/simplehttpserver/exchange).
---

# Simple Http Handler

This library simplifies complex operations with a [`SimpleHttpHandler`](/simplehttpserver/documentation/com/kttdevelopment/simplehttpserver/SimpleHttpHandler.html); this is similar to the native handler but is uses a [`SimpleHttpExchange`](simple-http-exchange) instead.

```java
HttpServer server = HttpServer.create(8080);

server.createContext(
    "/",
    new SimpleHttpHandler(){

        @Override
        public void handle(SimpleHttpExchange exchange){
            // handle the request here
        }

    }
);
```

<!-- issue -->
------

## Issue: Handlers run more than once

If an exchange does not recieve response headers then the handler will retry several times.
In order to prevent this you must always close the exchange when finished handling to prevent the client from retrying.

## Issue: No response & no exceptions

Any exceptions thrown in handlers are not sent to the server; this is to prevent handlers from crashing the server. Stack trace information can only be retrieved by using a try catch.

```java
HttpHandler handler = new HttpHandler(){

    @Override
    public void handle(HttpExchange httpExchange){
        try{
            // handle the request here
        }catch(Exception e){
            e.printStackTrace();
        }
    }

};
```