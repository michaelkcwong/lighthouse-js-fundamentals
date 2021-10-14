function calculateRectangleArea(length, width) {
  let rectangleArea = length * width
  if (length < 0 || width < 0) {
    return undefined;
  } else {
    return rectangleArea
  }
}

function calculateTriangleArea(base, height) {
  let triangleArea = (base * height) / 2
  if (base < 0 || height < 0) {
    return undefined;
  } else {
    return triangleArea
  }
}

function calculateCircleArea(radius) {
  let circleArea = Math.PI * Math.pow(radius, 2)
  if (radius < 0) {
    return undefined;
  } else {
    return circleArea
  }
}

