// a) How to create a secure WebSocket without third party library?
let socket = new WebSocket('wss://www.example.com/socketserver');

/*
* b) How to send data to the server?
* As establishing a connection is asynchronous and prone to failure there is no guarantee that calling the send()
* method immediately after creating a WebSocket object will be successful. We can at least be sure that attempting to
* send data only takes place once a connection is established by defining an onopen event handler to do the work.
 */
socket.onopen = function (event) {
    socket.send("Here's some text that the server is urgently awaiting!");
};

// c) How to receive data from the server?
socket.onmessage = function (event) {
    console.log(event.data);
};

/*
* d) How to close a WebSocket connection?
* It may be helpful to examine the socket's bufferedAmount attribute before attempting to close the connection to
* determine if any data has yet to be transmitted on the network. If this value isn't 0, there's pending data still,
* so you may wish to wait before closing the connection.
 */

if(socket.bufferedAmount === 0) {
    socket.close();
}