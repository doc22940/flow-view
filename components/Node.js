import React, { PropTypes } from 'react'
import ignoreEvent from '../util/ignoreEvent'

const fill = 'ghostwhite'
const styles = {
  defaultBox: { stroke: 'black', strokeWidth: 1 },
  defaultPin: { stroke: 'black', strokeWidth: 1 }
}

const focusTarget = (e) => {
  e.target.focus()
}

const Node = ({
  id,
  x, y, width, height,
  text,
  pinRadius,
  ins, outs,
  draggedLinkId,
  isDraggingLink,
  addLink,
  selectNode,
  delNode,
  selected,
  setNumIns,
  endDragging,
  endDraggingLink
}) => (
  <g
    onClick={ignoreEvent}
    onDoubleClick={ignoreEvent}
    onMouseDown={selectNode}
    transform={`translate(${x},${y})`}
    style={{
      cursor: (selected ? 'pointer' : 'default')
    }}
  >
    {selected
      ? (
          <g
            onClick={delNode}
          >
            <rect
              transform={`translate(${width+2},-18)`}
              rx={pinRadius}
              ry={pinRadius}
              width={20}
              height={20}
              fill={fill}
              style={styles.defaultBox}
            >
            </rect>
            <path
              transform={`translate(${width},-20)`}
              fill={'black'}
              d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'
            />
          </g>
        )
      : undefined
    }

    {selected
      ? (
          <foreignObject
            x={-45}
            y={0}
            width={40}
            height={20}
          >
            <input
              type='number'
              min={0}
              step={1}
              value={ins.length}
              style={{
                width: 40
              }}
              onClick={focusTarget}
              onChange={setNumIns}
            />
          </foreignObject>
        )
      : undefined
    }

    <rect
      rx={pinRadius}
      ry={pinRadius}
      width={width}
      height={height}
      fill={fill}
      style={styles.defaultBox}
    ></rect>

    <text
      x={pinRadius * 2}
      y={height / 2}
      style={{pointerEvents: 'none'}}
    >
      <tspan>{text}</tspan>
    </text>

    {
      ins.map(
        (pin, i, array) => (
          <circle
            key={i}
            cx={pin.cx}
            cy={pin.cy}
            r={pin.r}
            fill={fill}
            onClick={ignoreEvent}
            onMouseLeave={ignoreEvent}
            onMouseDown={ignoreEvent}
            onMouseUp={isDraggingLink ? endDraggingLink(draggedLinkId, { to: [ id, i ] }) : undefined}
            style={styles.defaultPin}
          >
          </circle>
        )
      )
    }

    {
      outs.map(
        (pin, i) => (
          <circle
            key={i}
            cx={pin.cx}
            cy={pin.cy}
            r={pin.r}
            fill={fill}
            style={styles.defaultPin}
            onClick={ignoreEvent}
            onMouseDown={addLink([id, i], null)}
            onMouseUp={ignoreEvent}
            onMouseLeave={ignoreEvent}
          >
          </circle>
        )
      )
    }
  </g>
)

Node.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  pinRadius: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  ins: PropTypes.array.isRequired,
  outs: PropTypes.array.isRequired,
  selectNode: PropTypes.func.isRequired,
  endDragging: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
  addLink: PropTypes.func.isRequired
}

Node.defaultProps = {
  selected: false
}

export default Node
