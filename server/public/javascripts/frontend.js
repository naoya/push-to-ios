(function() {
  $(document).bind('ready', function() {
    var socket;
    socket = io.connect('http://localhost:3000');
    $("#hello").click(function() {
      return socket.emit('fireEvent:hello');
    });
    $("#openUrl").click(function() {
      var url;
      url = $("#urlForm").val();
      if (url && url.match(/^http:\/\//)) {
        return socket.emit('fireEvent:openUrl', {
          url: url
        });
      }
    });
    $("#phoneCall").click(function() {
      var tel;
      tel = $("#tel").val();
      if (tel) {
        return socket.emit('fireEvent:phoneCall', {
          tel: tel
        });
      }
    });
    $("#openMap").click(function() {
      var lat, lng;
      lat = $("#latitude").val();
      lng = $("#longitude").val();
      if (lat && lng) {
        return socket.emit('fireEvent:openMap', {
          latitude: lat,
          longitude: lng
        });
      }
    });
    return $("#pbcopy").click(function() {
      var text;
      text = $("#pbcopyForm").val();
      if (text) {
        return socket.emit('fireEvent:pbcopy', {
          text: text
        });
      }
    });
  });
}).call(this);
