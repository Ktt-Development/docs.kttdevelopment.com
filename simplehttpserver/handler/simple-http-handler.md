---
title: SimpleHttpHandler
body: |
    A simple http handler passes a [SimpleHttpExchange]()
---

# SimpleHttpHandler

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