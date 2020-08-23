---
---
# Predicate Handler

This handler accepts a [`Predicate`](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/function/Predicate.html)[`<HttpExchange>`](https://docs.oracle.com/en/java/javase/11/docs/api/jdk.httpserver/com/sun/net/httpserver/HttpExchange.html) and uses that to determine which handler to send the request to.

```java
HttpHandler trueHandler = new HttpHandler(){

    @Override
    public void handle(HttpExchange httpExchange){
        // handle if true
    }

};

HttpHandler falseHandler = new HttpHandler(){

    @Override
    public void handle(HttpExchange httpExchange){
        // handle if false
    }

};

Predicate<HttpExchange> predicate = new Predicate<>(){

    @Override
    public boolean test(HttpExchange exchange){
        return true;
    }

};

HttpServer server = HttpServer.create(8080);

server.createContext("/", new PredicateHandler(trueHandler, falseHandler, predicate));
```

<!-- root -->
# Root Handler

The root handler fixes the issues of pages with no handlers resolving to the handler at the `/` context. This handler can be used for 404 pages.

**This handler must be added to the `/` context.**

```java
HttpHandler indexHandler = new HttpHandler(){

    @Override
    public void handle(HttpExchange httpExchange){
        // handle index '/'
    }

};

HttpHandler alt404Handler = new HttpHandler(){

    @Override
    public void handle(HttpExchange httpExchange){
        // handle requests with no handler   
    }

};

HttpServer server = HttpServer.create(8080);

server.create("/", new RootHandler(indexHandler, alt404Handler));

```

