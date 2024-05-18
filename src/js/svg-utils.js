/*
 * Credit: AlexeyBoiko / DgrmJS
 * https://itnext.io/javascript-zoom-like-in-maps-for-svg-html-89c0df016d8d
 * https://github.com/AlexeyBoiko/DgrmJS/blob/e6d6a13c6294e79058f605ff1609c3f08ee5cf27/src/diagram-extensions/scale-feature.js
 */

/* global SVGTransform */

function first (iterable, filter) {
  for (const el of iterable) {
    if (!filter || filter(el)) { return el }
  }
  return null
}

function svgPositionSet (svgEl, position, svg) {
  ensureTransform(svgEl, SVGTransform.SVG_TRANSFORM_TRANSLATE, svg).setTranslate(position.x, position.y)
}

/**
  * @param {SVGGraphicsElement} svgEl
  * @returns { {x: number, y: number} }
  */
function svgPositionGet (svgEl) {
  const tr = first(svgEl.transform.baseVal, tt => tt.type === SVGTransform.SVG_TRANSFORM_TRANSLATE)
  return tr ? { x: tr.matrix.e, y: tr.matrix.f } : { x: 0, y: 0 }
}

function ensureTransform (svgEl, transform, svg) {
  let tr = first(svgEl.transform.baseVal, tt => tt.type === transform)
  if (!tr) {
    tr = (svgEl.ownerSVGElement || svg).createSVGTransform()
    svgEl.transform.baseVal.appendItem(tr)
  }
  return tr
}

/**
  * @param {SVGGraphicsElement} svgEl
  * @param {Point} fixedPoint
  *                this point will not change position while scale
  * @param {number} scale
  * @param {number} nextScale
  */

function svgScale (svgEl, fixedPoint, scale, nextScale) {
  const position = svgPositionGet(svgEl)

  svgPositionSet(svgEl, {
    x: nextScale / scale * (position.x - fixedPoint.x) + fixedPoint.x,
    y: nextScale / scale * (position.y - fixedPoint.y) + fixedPoint.y
  })

  ensureTransform(svgEl, SVGTransform.SVG_TRANSFORM_SCALE)
    .setScale(nextScale, nextScale)
}

export { svgPositionSet, svgPositionGet, svgScale }
