var flowView = require('flow-view')

var Canvas = flowView.Canvas,
    view = {
      node: {
        a: {
          x: 80,
          y: 100,
          w: 10,
          h: 1,
          text: "Drag me",
          outs: [{name: "out0", data:1}]
        },
        b: {
          x: 180,
          y: 200,
          w: 10,
          h: 1,
          text: "Hello",
          ins: [{name: "in0", data:2}, {name: "in1", data:1}]
        }
     },
     link: {
       1: {
         from: ['a', 0],
         to: ['b', 1]
       }
     }
   }

var canvas = new Canvas('drawing', view)
