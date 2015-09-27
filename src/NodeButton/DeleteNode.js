
var NodeButton = require('../NodeButton')

class DeleteNode extends NodeButton {
  constructor (canvas) {
    super(canvas)

  var svg   = canvas.svg,
      theme = canvas.theme

  var halfPinSize           = theme.halfPinSize,
      strokeLine            = theme.strokeLine,
      strokeLineHighlighted = theme.strokeLineHighlighted

  var size = halfPinSize * 2
  this.size = size

  var group = svg.group()

  var diag1 = svg.line(0, 0, size, size)
                 .stroke(strokeLine)

  var diag2 = svg.line(0, size, size, 0)
                 .stroke(strokeLine)

  group.add(diag1)
       .add(diag2)
       .hide()

  this.group = group

  function delNode () {
    var key = node.key

    canvas.nodeControls.detach()

    canvas.broker.emit('delNode', key)
  }

  function deselectButton () {
    group.off('click')

    diag1.stroke(strokeLine)
    diag2.stroke(strokeLine)
  }

  group.on('mouseout', deselectButton.bind(this))

  function selectButton () {
    group.on('click', delNode)

    diag1.stroke(strokeLineHighlighted)
    diag2.stroke(strokeLineHighlighted)
  }

  group.on('mouseover', selectButton.bind(this))
}

attachTo (node) {
  var group = this.group,
      size  = this.size

  group.move(node.x + node.w, node.y - size)
       .show()

  this.node = node
}
}

module.exports = DeleteNode

