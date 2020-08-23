---
---
# Redirect Handler

This handler redirects the user to a different page, without saving the redirect url to the history. 

```java
HttpServer server = HttpServer.create(8080);
// redirect /github to github.com
server.createContext(
    "/github",
    new RedirectHandler("https://github.com/")
);
```