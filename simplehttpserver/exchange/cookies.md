---
title: Cookies
body: |
    Cookies are used to save small bits of information for a user across multiple sessions.
---
# HTTP Cookies

**This feature is only compatible with [SimpleHttpServer](/simplehttpserver/server).**

This library simplifies the reading, creation, and modification of user cookies.

# Get Cookies

To get cookies you use the [`getCookies`](/simplehttpserver/documentation/com/kttdevelopment/simplehttpserver/SimpleHttpExchange.html#getCookies()) method on the [simple http exchange](/simplehttpserver/exchange/simple-http-exchange). This returns a hash map with all the keys and values for the cookies that the client has loaded for that server.

More information on HTTP Cookies can be found [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies).

# Creating Cookies

To create cookies for the client a [`SimpleHttpCookie.Builder`](/simplehttpserver/documentation/com/kttdevelopment/simplehttpserver/SimpleHttpCookie.Builder.html) can be used. Only the key and value are required. Information on the additional parameters can be found [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies).

**The exchange must be sent in order for the cookies to change for the client.**

```java
SimpleHttpCookie cookie = new SimpleHttpCookie.Builder("key","value")
    .build();
```

# Modifying Cookies

To change cookies that the client has you can use the [`setCookie`](/simplehttpserver/documentation/com/kttdevelopment/simplehttpserver/SimpleHttpExchange.html#setCookie(java.lang.String,java.lang.String)) method in the exchange. Cookies are removed by using a blank value. This method accepts both [`SimpleHttpCookie`](/simplehttpserver/documentation/com/kttdevelopment/simplehttpserver/SimpleHttpCookie.html) and Strings as parameters.

**The exchange must be sent in order for the cookies to change for the client.**

```java
SimpleHttpHandler handler = new SimpleHttpHandler(){

    @Override
    public void handle(SimpleHttpExchange exchange){
        SimpleHttpCookie cookie = new SimpleHttpCookie.Builder("key","value")
            .build();

        exchange.setCookie(cookie);
        exchange.setCookie("anotherKey","value");
        exchange.send(200);
        exchange.close();
    }

};
```