socket = {}

socket.connect = (win) ->
  proxy = Ti.UI.createWebView
    url: "webview/webview.html"
    top: -100,
    left: -100,
    width: 0
    height: 0
  win.add proxy

# Alias for Titanium functions just for fun
socket.emit = (e, params) ->
  Ti.App.fireEvent e, params

socket.on = (e, callback) ->
  Ti.App.addEventListener e, callback