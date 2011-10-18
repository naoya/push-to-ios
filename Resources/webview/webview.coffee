# Socket.IO <=> Titanium Events proxy
socket = io.connect 'http://localhost:3000'

socket.on 'hello', () ->
  Ti.App.fireEvent 'hello'

socket.on 'openUrl', (params) ->
  Ti.App.fireEvent 'openUrl', params

socket.on 'openMap', (params) ->
  Ti.App.fireEvent 'openMap', params

socket.on 'phoneCall', (params) ->
  Ti.App.fireEvent 'phoneCall', params

socket.on 'pbcopy', (params) ->
  Ti.App.fireEvent 'pbcopy', params