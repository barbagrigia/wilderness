import { shape, render, play } from './tmp'

const positionA = {
  type: 'g',
  shapes: [
    { type: 'path', d: 'M0,370l280,140l280,-140l-280,-140z', fill: 'rgb( 125, 180, 89 )' },
    { type: 'path', d: 'M0,370l0,5l280,140l0,-5z', fill: 'rgb( 85, 111, 67 )' },
    { type: 'path', d: 'M280,510l0,5l280,-140l0,-5z', fill: 'rgb( 63, 82, 50 )' },
    { type: 'path', d: 'M312,416l78,39l60,-30l-78,-39z', fill: 'rgb( 102, 168, 62 )' },
    { type: 'path', d: 'M420,381l16,8l0,-16z', fill: 'rgb( 79, 69, 48 )' },
    { type: 'path', d: 'M436,373l0,16l16,-8z', fill: 'rgb( 54, 47, 32 )' },
    { type: 'path', d: 'M432,369l-1,12.5l5,2.5l0,-13z', fill: 'rgb( 138, 116, 71 )' },
    { type: 'path', d: 'M436,371l0,13l5,-2.5l-1,-12.5z', fill: 'rgb( 79, 65, 36 )' },
    { type: 'path', d: 'M426,357l0,10l10,5l0,-10z', fill: 'rgb( 52, 78, 36 )' },
    { type: 'path', d: 'M436,362l0,10l10,-5l0,-10z', fill: 'rgb( 82, 122, 55 )' },
    { type: 'path', d: 'M426,357l10,5l10,-5l-10,-5z', fill: 'rgb( 100, 156, 62 )' },
    { type: 'path', d: 'M156,370l124,62l0,-2l-120,-60l0,-2z', fill: 'rgb( 85, 130, 56 )' },
    { type: 'path', d: 'M280,430l0,2l124,-62l-4,-2l0,2z', fill: 'rgb( 57, 84, 39 )' },
    { type: 'path', d: 'M160,365l0,5l120,60l0,-5z', fill: 'rgb( 168, 173, 168 )' },
    { type: 'path', d: 'M280,425l0,5l120,-60l0,-5z', fill: 'rgb( 115, 124, 114 )' },
    { type: 'path', d: 'M160,365l120,60l120,-60l-120,-60z', fill: 'rgb( 209, 215, 209 )' },
    { type: 'path', d: 'M180,60l0.1,0.05l99.9,-49.95l0,-0.1z', fill: 'none' },
    { type: 'path', d: 'M280,10l0,0.05l99.9,49.95l0.1,-0.05z', fill: 'none' },
    { type: 'path', d: 'M310,414.9l0,0.1l60,-30l-0.1,-0.05z', fill: 'none' },
    { type: 'path', d: 'M370,340l-0.1,0.05l0,44.9l0.1,0.05z', fill: 'none' },
    { type: 'path', d: 'M310,414.9l0,0.1l60,-30l0,-0.1z', fill: 'none' },
    { type: 'path', d: 'M339,400.4l0,0.1l2,-1l0,-0.1z', fill: 'none' }
  ]
}

const positionB = {
  type: 'g',
  duration: 1000,
  easing: 'easeInExpo',
  shapes: [
    { type: 'path', d: 'M0,370l280,140l280,-140l-280,-140z', fill: 'rgb( 125, 180, 89 )' },
    { type: 'path', d: 'M0,370l0,5l280,140l0,-5z', fill: 'rgb( 85, 111, 67 )' },
    { type: 'path', d: 'M280,510l0,5l280,-140l0,-5z', fill: 'rgb( 63, 82, 50 )' },
    { type: 'path', d: 'M312,416l78,39l60,-30l-78,-39z', fill: 'rgb( 102, 168, 62 )' },
    { type: 'path', d: 'M420,381l16,8l0,-16z', fill: 'rgb( 79, 69, 48 )' },
    { type: 'path', d: 'M436,373l0,16l16,-8z', fill: 'rgb( 54, 47, 32 )' },
    { type: 'path', d: 'M426,347l-2,34l12,6l0,-35z', fill: 'rgb( 138, 116, 71 )' },
    { type: 'path', d: 'M436,352l0,35l12,-6l-2,-34z', fill: 'rgb( 79, 65, 36 )' },
    { type: 'path', d: 'M406,307l0,30l30,15l0,-30z', fill: 'rgb( 52, 78, 36 )' },
    { type: 'path', d: 'M436,322l0,30l30,-15l0,-30z', fill: 'rgb( 82, 122, 55 )' },
    { type: 'path', d: 'M406,307l30,15l30,-15l-30,-15z', fill: 'rgb( 100, 156, 62 )' },
    { type: 'path', d: 'M156,370l124,62l0,-2l-120,-60l0,-2z', fill: 'rgb( 85, 130, 56 )' },
    { type: 'path', d: 'M280,430l0,2l124,-62l-4,-2l0,2z', fill: 'rgb( 57, 84, 39 )' },
    { type: 'path', d: 'M160,60l0,310l120,60l0,-310z', fill: 'rgb( 168, 173, 168 )' },
    { type: 'path', d: 'M280,120l0,310l120,-60l0,-310z', fill: 'rgb( 115, 124, 114 )' },
    { type: 'path', d: 'M160,60l120,60l120,-60l-120,-60z', fill: 'rgb( 209, 215, 209 )' },
    { type: 'path', d: 'M180,60l0.1,0.05l99.9,-49.95l0,-0.1z', fill: 'none' },
    { type: 'path', d: 'M280,10l0,0.05l99.9,49.95l0.1,-0.05z', fill: 'none' },
    { type: 'path', d: 'M310,414.9l0,0.1l60,-30l-0.1,-0.05z', fill: 'none' },
    { type: 'path', d: 'M370,340l-0.1,0.05l0,44.9l0.1,0.05z', fill: 'none' },
    { type: 'path', d: 'M310,414.9l0,0.1l60,-30l0,-0.1z', fill: 'rgb( 70, 75, 70 )' },
    { type: 'path', d: 'M339,400.4l0,0.1l2,-1l0,-0.1z', fill: 'rgb( 38, 39, 38 )' }
  ]
}

const positionC = {
  type: 'g',
  duration: 200,
  easing: 'easeOutBack',
  shapes: [
    { type: 'path', d: 'M0,370l280,140l280,-140l-280,-140z', fill: 'rgb( 125, 180, 89 )' },
    { type: 'path', d: 'M0,370l0,5l280,140l0,-5z', fill: 'rgb( 85, 111, 67 )' },
    { type: 'path', d: 'M280,510l0,5l280,-140l0,-5z', fill: 'rgb( 63, 82, 50 )' },
    { type: 'path', d: 'M312,416l78,39l60,-30l-78,-39z', fill: 'rgb( 102, 168, 62 )' },
    { type: 'path', d: 'M420,381l16,8l0,-16z', fill: 'rgb( 79, 69, 48 )' },
    { type: 'path', d: 'M436,373l0,16l16,-8z', fill: 'rgb( 54, 47, 32 )' },
    { type: 'path', d: 'M426,347l-2,34l12,6l0,-35z', fill: 'rgb( 138, 116, 71 )' },
    { type: 'path', d: 'M436,352l0,35l12,-6l-2,-34z', fill: 'rgb( 79, 65, 36 )' },
    { type: 'path', d: 'M406,307l0,30l30,15l0,-30z', fill: 'rgb( 52, 78, 36 )' },
    { type: 'path', d: 'M436,322l0,30l30,-15l0,-30z', fill: 'rgb( 82, 122, 55 )' },
    { type: 'path', d: 'M406,307l30,15l30,-15l-30,-15z', fill: 'rgb( 100, 156, 62 )' },
    { type: 'path', d: 'M156,370l124,62l0,-2l-120,-60l0,-2z', fill: 'rgb( 85, 130, 56 )' },
    { type: 'path', d: 'M280,430l0,2l124,-62l-4,-2l0,2z', fill: 'rgb( 57, 84, 39 )' },
    { type: 'path', d: 'M160,60l0,310l120,60l0,-310z', fill: 'rgb( 168, 173, 168 )' },
    { type: 'path', d: 'M280,120l0,310l120,-60l0,-310z', fill: 'rgb( 115, 124, 114 )' },
    { type: 'path', d: 'M160,60l120,60l120,-60l-120,-60z', fill: 'rgb( 209, 215, 209 )' },
    { type: 'path', d: 'M180,60l0.1,0.05l99.9,-49.95l0,-0.1z', fill: 'rgb( 115, 124, 114 )' },
    { type: 'path', d: 'M280,10l0,0.05l99.9,49.95l0.1,-0.05z', fill: 'rgb( 168, 173, 168 )' },
    { type: 'path', d: 'M310,414.9l0,0.1l60,-30l-0.1,-0.05z', fill: 'rgb( 209, 215, 209 )' },
    { type: 'path', d: 'M370,340l-0.1,0.05l0,44.9l0.1,0.05z', fill: 'rgb( 168, 173, 168 )' },
    { type: 'path', d: 'M310,370l0,45l60,-30l0,-45z', fill: 'rgb( 70, 75, 70 )' },
    { type: 'path', d: 'M339,355.5l0,45l2,-1l0,-45z', fill: 'rgb( 38, 39, 38 )' }
  ]
}

const positionD = {
  type: 'g',
  duration: 400,
  easing: 'easeOutBounce',
  shapes: [
    { type: 'path', d: 'M0,370l280,140l280,-140l-280,-140z', fill: 'rgb( 125, 180, 89 )' },
    { type: 'path', d: 'M0,370l0,5l280,140l0,-5z', fill: 'rgb( 85, 111, 67 )' },
    { type: 'path', d: 'M280,510l0,5l280,-140l0,-5z', fill: 'rgb( 63, 82, 50 )' },
    { type: 'path', d: 'M312,416l78,39l60,-30l-78,-39z', fill: 'rgb( 102, 168, 62 )' },
    { type: 'path', d: 'M420,381l16,8l0,-16z', fill: 'rgb( 79, 69, 48 )' },
    { type: 'path', d: 'M436,373l0,16l16,-8z', fill: 'rgb( 54, 47, 32 )' },
    { type: 'path', d: 'M426,347l-2,34l12,6l0,-35z', fill: 'rgb( 138, 116, 71 )' },
    { type: 'path', d: 'M436,352l0,35l12,-6l-2,-34z', fill: 'rgb( 79, 65, 36 )' },
    { type: 'path', d: 'M406,307l0,30l30,15l0,-30z', fill: 'rgb( 52, 78, 36 )' },
    { type: 'path', d: 'M436,322l0,30l30,-15l0,-30z', fill: 'rgb( 82, 122, 55 )' },
    { type: 'path', d: 'M406,307l30,15l30,-15l-30,-15z', fill: 'rgb( 100, 156, 62 )' },
    { type: 'path', d: 'M156,370l124,62l0,-2l-120,-60l0,-2z', fill: 'rgb( 85, 130, 56 )' },
    { type: 'path', d: 'M280,430l0,2l124,-62l-4,-2l0,2z', fill: 'rgb( 57, 84, 39 )' },
    { type: 'path', d: 'M160,60l0,310l120,60l0,-310z', fill: 'rgb( 168, 173, 168 )' },
    { type: 'path', d: 'M280,120l0,310l120,-60l0,-310z', fill: 'rgb( 115, 124, 114 )' },
    { type: 'path', d: 'M160,60l120,60l120,-60l-120,-60z', fill: 'rgb( 209, 215, 209 )' },
    { type: 'path', d: 'M180,60l10,5l90,-45l0,-10z', fill: 'rgb( 115, 124, 114 )' },
    { type: 'path', d: 'M280,10l0,10l90,45l10,-5z', fill: 'rgb( 168, 173, 168 )' },
    { type: 'path', d: 'M310,411l0,4l60,-30l-4,-2z', fill: 'rgb( 209, 215, 209 )' },
    { type: 'path', d: 'M370,340l-4,2l0,41l4,2z', fill: 'rgb( 168, 173, 168 )' },
    { type: 'path', d: 'M310,370l0,41l56,-28l0,-41z', fill: 'rgb( 70, 75, 70 )' },
    { type: 'path', d: 'M335,357.5l0,41l2,-1l0,-41z', fill: 'rgb( 38, 39, 38 )' }
  ]
}

const animation = shape(positionA, positionB, positionC, positionD)

render({ selector: '.svg' }, animation)

play(animation, { alternate: true, iterations: Infinity })
