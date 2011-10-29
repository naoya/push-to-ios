var app, express, io;
express = require("express");
app = module.exports = express.createServer();
app.configure(function() {
  app.set("views", __dirname + "/views");
  app.set("view engine", "ejs");
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  return app.use(express.static(__dirname + "/public"));
});
app.configure("development", function() {
  return app.use(express.errorHandler({
    dumpExceptions: true,
    showStack: true
  }));
});
app.configure("production", function() {
  return app.use(express.errorHandler());
});
app.get("/", function(req, res) {
  return res.render("index", {
    title: "Express"
  });
});
app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
io = require('socket.io').listen(app);
io.sockets.on('connection', function(socket) {
  socket.on('fireEvent:hello', function() {
    return socket.broadcast.emit('hello');
  });
  socket.on('fireEvent:openUrl', function(data) {
    console.log(data);
    return socket.broadcast.emit('openUrl', data);
  });
  socket.on('fireEvent:openMap', function(data) {
    return socket.broadcast.emit('openMap', data);
  });
  socket.on('fireEvent:phoneCall', function(data) {
    return socket.broadcast.emit('phoneCall', data);
  });
  return socket.on('fireEvent:pbcopy', function(data) {
    return socket.broadcast.emit('pbcopy', data);
  });
});