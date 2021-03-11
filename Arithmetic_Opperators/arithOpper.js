function getArea(len, wid) {
    let area;
    //calculation
    area = len * wid;

    return area;
}

function getPerimeter(len, wid) {
    let perimeter;
    //calculation
    perimeter = 2 * (len + wid);

    return perimeter;
}

const l = 3
const w = 4.5

console.log(getArea(l, w));
console.log(getPerimeter(l , w));