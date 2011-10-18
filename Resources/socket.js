var socket;
socket = {};
socket.connect = function(win) {
  var proxy;
  proxy = Ti.UI.createWebView({
    url: "webview/webview.html",
    top: -100,
    left: -100,
    width: 0,
    height: 0
  });
  return win.add(proxy);
};
socket.emit = function(e, params) {
  return Ti.App.fireEvent(e, params);
};
socket.on = function(e, callback) {
  return Ti.App.addEventListener(e, callback);
};