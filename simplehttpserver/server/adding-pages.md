---
title: Adding Pages
body: |
    In order to add a webpage to the server you must add a [handler](/simplehttpserver/handler) at a specified context.
---
# Adding Pages

Pages (refered to as a context) can be added using [`createContext`](/simplehttpserver/documentation/com/kttdevelopment/simplehttpserver/SimpleHttpServer.html#createContext(java.lang.String)). This method accepts a String, which is the path that the page will be located at; and an [Http Hander](/simplehttpserver/handler) which handles the request.

```java
SimpleHttpServer server = SimpleHttpServer.create(8080);

// this would be accessible at
// localhost:8080/some/web/page
server.createContext("/some/web/page");

// this would be accessible at
// localhost:8080/some/other/web/page
server.createContext(
    "/some/other/web/page",
    new HttpHandler(){

        @Override
        public void handle(HttpExchange httpExchange){
            // ...
        }

    }
);
```

Contexts in a Http Server are case sensitive and will use the most specific context available.

**Example:** If a user goes to `/this/web/page` and there are only handlers for `/this` and `/this/web`, then the handler for `/this/web` would be used because its the most specific context that exists on the server.

This consequently means that any handler added to the root `/` context would handler any requests that don't have a handler, since its the most specific one available.

To resolve this issue the libary provides a [root handler](/simplehttpserver/handler/root-handler).
