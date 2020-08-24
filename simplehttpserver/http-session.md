# Http Session 

**This feature is only compatible with SimpleHttpServer.**

The server can track user by the address and port given to the exchange, however this doesn't work across multiple tabs or when the user refreshes the page; instead we use a session cookie to track a user across exchanges.

Every time an exchange happens a user is assigned an http session cookie. Each http session has a session id, creation time, and last accessed time.

**The server must have a `HttpSessionHandler` set using `setHttpSessionHandler` for sessions to work.** The session of the client can be retrived using the `getHttpSession` method.

```java
SimpleHttpServer server = new SimpleHttpServer(8080);
// required
server.setHttpSessionHandler(new HttpSessionHandler());

HttpHandler handler = new HttpHandler(){

    @Override
    public void handle(HttpExchange exchange){
        HttpSession session = server.getHttpSession(exchange);
        exchange.send(200);
        exchange.close();
    }

};
```

# Http Session Handler

The session handler keeps track of all the active sessions and determines the name of the session cookie; by default this value is `__session-id`.

The session assignment can be overriden in the `assignSessionId` method of the session handler.

```java
HttpSessionHandler sessions = new HttpSessionHandler("_session-cookie"){

    @Override
    public String assignSessionId(HttpExchange exchange){
        return UUID.randomUUID().toString();
    }

};

SimpleHttpServer server = SimpleHttpServer.create(8080);
server.setHttpSessionHandler(sessions);
```
