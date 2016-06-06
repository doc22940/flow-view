export const ADD_NODE = 'ADD_NODE'

export const addNode = (node) => {
  return {
    type: ADD_NODE,
    node
  }
}

export const ADD_LINK = 'ADD_LINK'

export const addLink = (link, previousDraggingPoint) => {
  return {
    type: ADD_LINK,
    link,
    previousDraggingPoint
  }
}

export const DEL_NODE = 'DEL_NODE'

export const delNode = (id) => {
  return {
    type: DEL_NODE,
    id
  }
}

export const DEL_LINK = 'DEL_LINK'

export const delLink = (id) => {
  return {
    type: DEL_LINK,
    id
  }
}

export const DRAG_ITEMS = 'DRAG_ITEMS'

export const dragItems = (previousDraggingPoint, draggingDelta) => {
  return {
    type: DRAG_ITEMS,
    previousDraggingPoint,
    draggingDelta
  }
}

export const DRAG_LINK = 'DRAG_LINK'

export const dragLink = (previousDraggingPoint, draggingDelta) => {
  return {
    type: DRAG_LINK,
    previousDraggingPoint,
    draggingDelta
  }
}

export const END_DRAGGING_ITEMS = 'END_DRAGGING_ITEMS'

export const endDraggingItems = () => {
  return {
    type: END_DRAGGING_ITEMS
  }
}

export const END_DRAGGING_LINK = 'END_DRAGGING_LINK'

export const endDraggingLink = (id, link) => {
  return {
    type: END_DRAGGING_LINK,
    id,
    link
  }
}

export const HIDE_NODE_SELECTOR = 'HIDE_NODE_SELECTOR'

export const hideNodeSelector = () => {
  return {
    type: HIDE_NODE_SELECTOR
  }
}

export const SELECT_ITEM = 'SELECT_ITEM'

export const selectItem = ({id, x, y}) => {
  return {
    type: SELECT_ITEM,
    id,
    x,
    y
  }
}

export const SET_NODE_SELECTOR_TEXT = 'SET_NODE_SELECTOR_TEXT'

export const setNodeSelectorText = (text) => {
  return {
    type: SET_NODE_SELECTOR_TEXT,
    text
  }
}

export const SET_NUM_INS = 'SET_NUM_INS'

export const setNumIns = ({ nodeid, num }) => {
  return {
    type: SET_NUM_INS,
    nodeid,
    num
  }
}

export const SHOW_NODE_SELECTOR = 'SHOW_NODE_SELECTOR'

export const showNodeSelector = ({x, y}) => {
  return {
    type: SHOW_NODE_SELECTOR,
    x,
    y
  }
}
