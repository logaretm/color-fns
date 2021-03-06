export function getCartesianCoords (r, theta) {
  return {
    x: r * Math.cos(theta * Math.PI * 2),
    y: r * Math.sin(theta * Math.PI * 2)
  };
}

export function isBetween (lb, ub) {
  return (value) => {
    return value >= lb && value <= ub;
  };
};

export function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function mixValue (color1, color2, ratio = 0.5) {
  return Number((color1 * (1 - ratio) + color2 * ratio).toFixed(2));
}
