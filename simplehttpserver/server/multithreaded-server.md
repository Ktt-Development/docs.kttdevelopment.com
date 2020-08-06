# Multithreaded Server

By default the server runs on a single thread. This means that only one clients exchange can be processed at a time and can lead to long queues.

For a server to be multithreaded the executor must be changed to one that process threads in parallel. The executor can be changed using the `setExecutor` method.

To process a fixed amount of threads you can use [`Executors#newFixedThreadPool(int)`](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/concurrent/Executors.html#newFixedThreadPool(int)).

```java
SimpleHttpServer server = SimpleHttpServer.create();
// allow up to 10 simultaneous requests
server.setExecutor(Executors.newFixedThreadPool(10));
```

To process an unlimited amount of simultaneous threads you can use [`Executors#newCachedThreadPool()`](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/concurrent/Executors.html#newFixedThreadPool(int)).


```java
SimpleHttpServer server = SimpleHttpServer.create();
// allow unlimited simultaneous requests
server.setExecutor(Executors.newCachedThreadPool());
```

<!-- help -->
## Help: Multithreaded server is not processing requests in parallel.

Requests to the same context may not run in parallel for a user that is accessing the same page more than once. This issue is caused by the browser, where it will not send duplicate requests to the server at the same time.

This issue is better explained [here](https://stackoverflow.com/questions/43269178/java-httpsserver-multi-threaded/58676470#58676470).

If you still need to test multithreading then you must use an outdated browser like Internet Explorer or Microsoft Edge.