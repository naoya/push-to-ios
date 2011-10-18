$$ ?= {}
$$.ui =
  createRow: (params) ->
    row = Ti.UI.createTableViewRow
      height: 'auto'
      layout: 'absolute'
      hasChild: params.hasChild

    container = Ti.UI.createView
      top: 10
      left: 10
      width: 300
      height: 'auto'
      layout: 'vertical'

    title = Ti.UI.createLabel
      text: params.title
      color: "#000"
      top: 0
      bottom: 5
      left: 0
      width: 'auto'
      height: 'auto'
      font:
        fontSize: 16

    # date = Ti.UI.createLabel
    #   text: params.date
    #   width: 'auto'
    #   height: 'auto'
    #   top: 10
    #   right: 10
    #   color: '#999'
    #   font:
    #     fontSize: 14

    messageContainer = Ti.UI.createView
      top: 0
      left: 0
      height: 'auto'
      width: 'auto'
      layout: 'horizontal'

    favicon = Ti.UI.createImageView
      image: params.icon
      width: 16
      height: 16
      left: 0

    message = Ti.UI.createLabel
      text: params.message
      color: "#666"
      top: 0
      bottom: 10
      left: 3
      width: 'auto'
      height: 'auto'
      font:
        fontSize: 14

    messageContainer.add favicon
    messageContainer.add message
    container.add title
    container.add messageContainer
    row.add container
    # row.add date

    row.addEventListener 'click', params.click

    return row