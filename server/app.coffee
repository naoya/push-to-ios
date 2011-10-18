express = require "express"
app = module.exports = express.createServer()
app.configure ->
  app.set "views", __dirname + "/views"
  app.set "view engine", "ejs"
  app.use express.bodyParser()
  app.use express.methodOverride()
  app.use app.router
  app.use express.static __dirname + "/public"

app.configure "development", ->
  app.use express.errorHandler
    dumpExceptions: true
    showStack: true

app.configure "production", ->
  app.use express.errorHandler()

app.get "/", (req, res) ->
  res.render "index", title: "Express"

app.listen 3000
console.log "Express server listening on port %d in %s mode", app.address().port, app.settings.env

## socket.io
io = require('socket.io').listen app

io.sockets.on 'connection', (socket) ->
  socket.on 'fireEvent:hello', ->
    socket.broadcast.emit 'hello'

  socket.on 'fireEvent:openUrl', (data) ->
    console.log data
    socket.broadcast.emit 'openUrl', data

  socket.on 'fireEvent:openMap', (data) ->
    socket.broadcast.emit 'openMap', data

  socket.on 'fireEvent:phoneCall', (data) ->
    socket.broadcast.emit 'phoneCall', data

  socket.on 'fireEvent:pbcopy', (data) ->
    socket.broadcast.emit 'pbcopy', data
