/**
x1, y1 - начальная точка
x2, y2 - конечная точка
weight - жёсткость
*/
export function makePath(x1, y1, x2, y2): any {
    const weight = 0.3;
    const dx = (x2 - x1) * weight;
    const c1 = x1 + dx;
    const c2 = x2 - dx;
    return `<path d="M${x1},${y1} C${c1},${y1} ${c2},${y2} ${x2},${y2}" stroke="black" fill="transparent"/>`;
  }