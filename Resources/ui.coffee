$$ ?= {}
$$.ui =
  createRow: (params) ->
    row = Ti.UI.createTableViewRow
      height: 'auto'
      layout: 'absolute'
      hasChild: params.hasChild

    row.clickEvent = params.click

    container = Ti.UI.createView
      top: 10
      left: 10
      width: 290
      height: 'auto'
      layout: 'vertical'

    if params.image
      Ti.API.debug params.image
      container.add Ti.UI.createImageView
        image: params.image
        width: 100
        height: 100
        top: 0
        bottom: 3
        left: 5

    titleContainer = Ti.UI.createView
      top: 0
      left: 0
      height: 'auto'
      width: 'auto'
      layout: 'horizontal'

    favicon = Ti.UI.createImageView
      image: params.icon
      width: 16
      height: 16
      top: 2
      left: 0

    title = Ti.UI.createLabel
      text: params.title
      color: "#000"
      top: 0
      bottom: 5
      left: 3
      width: 'auto'
      height: 'auto'
      font:
        fontSize: 16

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

    titleContainer.add favicon
    titleContainer.add title
    container.add titleContainer
    container.add message
    row.add container
    # row.add date

    # row.addEventListener 'click', params.click

    return row