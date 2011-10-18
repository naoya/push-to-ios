var socket;
socket = io.connect('http://localhost:3000');
socket.on('hello', function() {
  return Ti.App.fireEvent('hello');
});
socket.on('openUrl', function(params) {
  return Ti.App.fireEvent('openUrl', params);
});
socket.on('openMap', function(params) {
  return Ti.App.fireEvent('openMap', params);
});
socket.on('phoneCall', function(params) {
  return Ti.App.fireEvent('phoneCall', params);
});
socket.on('pbcopy', function(params) {
  return Ti.App.fireEvent('pbcopy', params);
});