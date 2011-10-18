$(document).bind 'ready', ->
  socket = io.connect 'http://localhost:3000'

  $("#hello").click ->
    socket.emit 'fireEvent:hello'

  $("#openUrl").click ->
    url = $("#urlForm").val()
    if url and url.match /^http:\/\//
      socket.emit 'fireEvent:openUrl', url: url

  $("#phoneCall").click ->
    tel = $("#tel").val()
    if tel
      socket.emit 'fireEvent:phoneCall', tel: tel

  $("#openMap").click ->
    lat = $("#latitude").val()
    lng = $("#longitude").val()
    if lat and lng
      socket.emit 'fireEvent:openMap',
        latitude: lat
        longitude: lng

  $("#pbcopy").click ->
    text = $("#pbcopyForm").val()
    if text
      socket.emit 'fireEvent:pbcopy', text: text