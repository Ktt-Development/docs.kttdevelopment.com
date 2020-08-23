---
---
# HTTP Cookies

**This feature is only compatible with SimpleHttpServer.**

## Get Cookies

To get cookies you use the `getCookies` method on the [simple http exchange](/simplehttpserver/handler/simple-http-exchange#A-Simple-Http-Exchange). This returns a hash map with all the keys and values for the cookies that the client has loaded for that server.

More information on HTTP Cookies can be found [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies).

## Creating Cookies

To create cookies for the client a `SimpleHttpCookie.Builder` can be used. Only the key and value are required. Information on the additional parameters can be found [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies).

```java
SimpleHttpCookie cookie = new SimpleHttpCookie.Builder("key","value")
    .build();
```

## Setting Cookies

To change cookies that the client has you can use the `setCookie` method in the exchange. Cookies are removed by using a blank value. This method accepts both `SimpleHttpCookie` and Strings as parameters.

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