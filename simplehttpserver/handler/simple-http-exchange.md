# Http Exchange

An [`HttpExchange`](https://docs.oracle.com/en/java/javase/11/docs/api/jdk.httpserver/com/sun/net/httpserver/HttpExchange.html) is the client information that a handler is provided with.
This includes information like where it came from, the user, and any additional information that is sent with the request.


The information that the user receives is the information that is writtin to the [`OutputStream`](https://docs.oracle.com/en/java/javase/11/docs/api/jdk.httpserver/com/sun/net/httpserver/HttpExchange.html#getResponseBody()) along with any response headers.

<!-- simple http exchange -->
# A Simple Http Exchange

The native exchange recieves data via  [`InputStream`](https://docs.oracle.com/en/java/javase/11/docs/api/jdk.httpserver/com/sun/net/httpserver/HttpExchange.html#getRequestBody())s and sends data using [`OutputStream`](https://docs.oracle.com/en/java/javase/11/docs/api/jdk.httpserver/com/sun/net/httpserver/HttpExchange.html#getResponseBody())s. This means that any `GET` and `POST` requests must be parsed; and that the response must always be written to the steam.

A [`SimpleHttpExchange`](https://docs.kttdevelopment.com/simplehttpserver/com/kttdevelopment/simplehttpserver/SimpleHttpExchange.html) simplifies this process.

<!-- get -->
## `GET` Request

If a user sends a `GET` request the server will return a map of the keys and values for the request. This can be retrieved using the [`getGetMap`](https://docs.kttdevelopment.com/simplehttpserver/com/kttdevelopment/simplehttpserver/SimpleHttpExchange.html#getGetMap()) method in the exchange.

```java
// localhost:8080?exampleKey=exampleValue&anotherKey=anotherValue

SimpleHttpHandler handler = new SimpleHttpHandler(){

    @Override
    public void handle(SimpleHttpExchange exchange){
        Map GET = exchange.getGetMap();
        /*
        This returns a map:
        {
            "exampleKey": "exampleValue",
            "anotherKey": "anotherValue"
        }
        */
    }

};
```

<!-- post -->
## `POST` Request


If a user sends a `POST` request the server will return a map of the keys and values for the request. This can be retrieved using the [`getPostMap`](https://docs.kttdevelopment.com/simplehttpserver/com/kttdevelopment/simplehttpserver/SimpleHttpExchange.html#getPostMap()) method in the exchange.

```java
// localhost:8080?exampleKey=exampleValue&anotherKey=anotherValue

SimpleHttpHandler handler = new SimpleHttpHandler(){

    @Override
    public void handle(SimpleHttpExchange exchange){
        Map POST = exchange.getPostMap();
        /*
        This returns a map:
        {
            "exampleKey": "exampleValue",
            "anotherKey": "anotherValue"
        }
        */
    }

};
```

### multipart/form-data

Most post requests to are not as simple as keys and values.

This library adds support to multipart forms in a map containg the headers, content type, and values for each key.

Note that this feature is experimental.

**Example Map:**
```json
{
    "name_of_key" : {
        "headers": { },
        "value": ""
    },
    "name_of_file_key": {
        "headers": {
            "Content-Disposition": {
                "header-name": "Content-Disposition",
                "header-value": "form-data",
                "parameters": {
                    "filename": "file.txt",
                    "name": "file"
                }
            },
            "Content-Type": {
                "header-name": "Content-Type",
                "header-value": "text/plain",
                "parameters": {}
            }
        },
        "value": "value in bytes"
    }
}
```

Files sent through an exchange will be sent as bytes and not a file.

<!-- response -->
## Response

To send response headers you would set the headers in the [`getResponseHeaders`](https://docs.kttdevelopment.com/simplehttpserver/com/kttdevelopment/simplehttpserver/SimpleHttpExchange.html#getResponseHeaders()) method and send data using [`sendResponseHeaders`](https://docs.kttdevelopment.com/simplehttpserver/com/kttdevelopment/simplehttpserver/SimpleHttpExchange.html#sendResponseHeaders(int,long)) method. 

This process is simplified by using any of the [`send`](https://docs.kttdevelopment.com/simplehttpserver/com/kttdevelopment/simplehttpserver/SimpleHttpExchange.html#send(java.lang.String)) methods in the exchange.

The headers are sent with a response code. More information on these codes can be found [here](https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml).

**If a request does not send headers then the server will retry the handler.**

<!-- send -->
## Sending Data

Data can be sent to the user using any of the [`send`](https://docs.kttdevelopment.com/simplehttpserver/com/kttdevelopment/simplehttpserver/SimpleHttpExchange.html#send(byte%5B%5D)) methods. The send method can send data using String or byte arrays.

An optional boolean parameter can be used to compress files into [gzip](https://en.wikipedia.org/wiki/Gzip) files for faster exchanges.

When you are done you must use the [`close`](https://docs.kttdevelopment.com/simplehttpserver/com/kttdevelopment/simplehttpserver/SimpleHttpExchange.html#close()) method in the exchange.