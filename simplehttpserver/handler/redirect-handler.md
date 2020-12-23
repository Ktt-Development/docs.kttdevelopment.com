---
title: Redirect Handler
body: |
    A [`RedirectHandler`](/simplehttpserver/documentation/com/kttdevelopment/simplehttpserver/handler/RedirectHandler.html) is used to redirect the user to a different page without leaving the redirect page in the history.
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