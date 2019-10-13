# Small-Chat

#### 使用Express启动一个服务,并调用express.static存放静态资源

{% hint style="info" %}
#### express.static\(root, \[options\]\) <a id="express.static"></a>

This is a built-in middleware function in Express. It serves static files and is based on [serve-static](http://www.expressjs.com.cn/en/resources/middleware/serve-static.html).
{% endhint %}

#### 使用Socket.io让客户端和服务端进行连接

{% hint style="info" %}
Socket.IO is a library that enables real-time, bidirectional and event-based communication between the browser and the server.  

It consists of:

* a Node.js server: [Source](https://github.com/socketio/socket.io) \| [API](https://socket.io/docs/server-api/)
* a Javascript client library for the browser \(which can be also run from Node.js\): [Source](https://github.com/socketio/socket.io-client) \| [API](https://socket.io/docs/client-api/)
{% endhint %}

* 客户端可以根据用户的交互,emit事件给服务端
* 客户端监听事件\(emit by server\),并做对应处理.
* 服务端类似, 监听事件\(emit by client or other\),并做对应处理.

{% hint style="info" %}
**客户端 引入 io**

Exposed as the `io` namespace in the standalone build, or the result of calling `require('socket.io-client')`.

**API**

### socket.emit\(eventName\[, …args\]\[, ack\]\) <a id="socket-emit-eventName-&#x2026;args-ack"></a>

### socket.on\(eventName, callback\) <a id="socket-on-eventName-callback"></a>
{% endhint %}







