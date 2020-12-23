---
title: SimpleHttpExchange
body: |
    A simple http exchange simplifies the process of reading and writing to the exchange.
---

# SimpleHttpExchange

Most of the methods provided in the [HttpExchange](https://docs.oracle.com/en/java/javase/11/docs/api/jdk.httpserver/com/sun/net/httpserver/HttpExchange.html) are provided in the simple http exchange. All supported and additional fields can be found in the [documentation](/simplehttpserver/documentation/com/kttdevelopment/simplehttpserver/SimpleHttpExchange.html).

## `GET` Request

If a user sends a `GET` request the server will return a map of the keys and values for the request. This can be retrieved using the [`getGetMap`](/simplehttpserver/documentation/com/kttdevelopment/simplehttpserver/SimpleHttpExchange.html#getGetMap()) method in the exchange.

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

## `POST` Request

If a user sends a `POST` request the server will return a map of the keys and values for the request. This can be retrieved using the [`getPostMap`](/simplehttpserver/documentation/com/kttdevelopment/simplehttpserver/SimpleHttpExchange.html#getPostMap()) method in the exchange.

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

This library adds support to multipart forms as a [`MultipartFormData`](/simplehttpserver/documentation/com/kttdevelopment/simplehttpserver/MultipartFormData.html) object. This can be retrieved using the [`getPostMap`](/simplehttpserver/documentation/com/kttdevelopment/simplehttpserver/SimpleHttpExchange.html#getMultipartFormData()) method in the exchange.

The [`MultipartFormData`](/simplehttpserver/documentation/com/kttdevelopment/simplehttpserver/MultipartFormData.html) is a map of [`Records`](/simplehttpserver/documentation/com/kttdevelopment/simplehttpserver/Recors.html) and [`FileRecords`](/simplehttpserver/documentation/com/kttdevelopment/simplehttpserver/FileRecord.html).

Note that this feature is experimental.

Files sent through an exchange will be sent as bytes and not a file.


```java
SimpleHttpHandler handler = new SimpleHttpHandler(){

    @Override
    public void handle(SimpleHttpExchange exchange){
        MultipartFormData form = exchange.getMultipartFormData();
        Record record = form.getRecord("record");
        FileRecord file = (FileRecord) form.getRecord("file");

        final byte[] fileContent = file.getBytes();
    }

}
```

## Response

To send response headers you would set the headers in the [`getResponseHeaders`](/simplehttpserver/documentation/com/kttdevelopment/simplehttpserver/SimpleHttpExchange.html#getResponseHeaders()) method and send data using [`sendResponseHeaders`](/simplehttpserver/documentation/com/kttdevelopment/simplehttpserver/SimpleHttpExchange.html#sendResponseHeaders(int,long)) method.

This process is simplified by using any of the [`send`](/simplehttpserver/documentation/com/kttdevelopment/simplehttpserver/SimpleHttpExchange.html#send(java.lang.String)) methods in the exchange.

The headers are sent with a response code. More information on these codes can be found [here](https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml).

**If a request does not send headers then the server will retry the handler.**

## Sending Data

Data can be sent to the user using any of the [`send`](/simplehttpserver/documentation/com/kttdevelopment/simplehttpserver/SimpleHttpExchange.html#send(byte%5B%5D)) methods. The send method can send data using byte arrays, Strings or Files.

An optional boolean parameter can be used to compress files into [gzip](https://en.wikipedia.org/wiki/Gzip) files for faster exchanges.

When you are done you must use the [`close`](/simplehttpserver/documentation/com/kttdevelopment/simplehttpserver/SimpleHttpExchange.html#close()) method in the exchange.