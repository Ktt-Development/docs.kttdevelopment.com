# Http Handler

An [`HttpHandler`](https://docs.oracle.com/en/java/javase/11/docs/api/jdk.httpserver/com/sun/net/httpserver/HttpHandler.html) is what handles a request when the user accessing a page. This is passed with an [`HttpExchange`](simple-http-exchange) which contains information about the request.

```java
HttpServer server = HttpServer.create(8080);
server.createContext(
    "/",
    new HttpHandler(){

        @Override
        public void handle(HttpExchange httpExchange){
            // handle the request here
        }

    }
);
```

The information that the user receives is the information that is writtin to the [`OutputStream`](https://docs.oracle.com/en/java/javase/11/docs/api/jdk.httpserver/com/sun/net/httpserver/HttpExchange.html#getResponseBody()) along with any response headers.

<!-- simple http handler -->
# A Simple Http Handler

This library simplifies complex operations with a `SimpleHttpHandler`; this is similar to the native handler but is uses a [`SimpleHttpExchange`](simple-http-exchange) instead.

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