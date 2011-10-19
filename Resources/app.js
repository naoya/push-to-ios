var dummy, tab, tabGroup, table, win;
Ti.include("ui.js");
Ti.include("socket.js");
Ti.UI.setBackgroundColor("#fff");
win = Ti.UI.createWindow({
  title: "Chrome To iOS"
});
win.hideTabBar();
dummy = Ti.UI.createTableViewRow({
  height: 'auto'
});
table = Ti.UI.createTableView({
  top: 0,
  data: [dummy]
});
win.add(table);
table.prependRow = function(row) {
  return table.insertRowBefore(0, row, {
    animationStyle: Ti.UI.iPhone.RowAnimationStyle.LEFT
  });
};
tabGroup = Ti.UI.createTabGroup();
tab = Ti.UI.createTab({
  window: win
});
tabGroup.addTab(tab);
tabGroup.open();
socket.connect(win);
socket.on("hello", function(e) {
  return alert("hello!");
});
socket.on('openUrl', function(params) {
  return table.prependRow($$.ui.createRow({
    title: params.title || params.url,
    icon: "http://favicon.st-hatena.com/?url=" + params.url,
    message: 'URLを開く',
    image: params.image,
    hasChild: true,
    click: function() {
      var w;
      w = Ti.UI.createWindow();
      w.add(Ti.UI.createWebView({
        url: params.url
      }));
      return tab.open(w);
    }
  }));
});
socket.on('openMap', function(params) {
  return table.prependRow($$.ui.createRow({
    title: "" + params.latitude + ", " + params.longitude,
    icon: '/images/gmaps.ico',
    message: 'マップを開く',
    hasChild: true,
    click: function() {
      var anno, w;
      w = Ti.UI.createWindow();
      anno = Ti.Map.createAnnotation({
        latitude: params.latitude,
        longitude: params.longitude,
        animate: true
      });
      w.add(Ti.Map.createView({
        mapType: Ti.Map.STANDARD_TYPE,
        region: {
          latitude: params.latitude,
          longitude: params.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01
        },
        animate: true,
        regionFit: true,
        userLocation: true,
        annotations: [anno]
      }));
      return tab.open(w);
    }
  }));
});
socket.on('pbcopy', function(params) {
  return table.prependRow($$.ui.createRow({
    title: params.text,
    icon: '/images/note_pinned.ico',
    message: 'クリップボードにコピー',
    hasChild: false,
    click: function() {
      return Ti.UI.Clipboard.setText(params.text);
    }
  }));
});
socket.on('phoneCall', function(params) {
  Ti.API.debug(params.tel);
  return Ti.Platform.openURL("tel:" + params.tel);
});