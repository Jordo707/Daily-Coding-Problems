/*

Given two rectangles on a 2D graph, return the area of their intersection. If the rectangles don't intersect, return 0.

*/

const intersectionArea = (rect1, rect2) => {
    // Unpack the properties of the rectangles
    const [x1, y1] = rect1.top_left; // Destructuring top_left of rect1
    const [w1, h1] = rect1.dimensions; // Destructuring dimensions of rect1
    const [x2, y2] = rect2.top_left; // Destructuring top_left of rect2
    const [w2, h2] = rect2.dimensions; // Destructuring dimensions of rect2

    // Calculate bottom-right coordinates of both rectangles
    const rect1_bottom_right = [x1 + w1, y1 - h1];
    const rect2_bottom_right = [x2 + w2, y2 - h2];

    // Find the coordinates of the overlap rectangle
    const x_overlap = Math.max(0, Math.min(rect1_bottom_right[0], rect2_bottom_right[0]) - Math.max(x1, x2));
    const y_overlap = Math.max(0, Math.min(y1, y2) - Math.max(rect1_bottom_right[1], rect2_bottom_right[1]));

    // If there's no overlap, either x_overlap or y_overlap will be 0
    return x_overlap * y_overlap;
}

// Test Case

const rectangle1 = {
    "top_left": [1, 4],
    "dimensions": [3, 3]
}
const rectangle2 = {
    "top_left": [0, 5],
    "dimensions": [4, 3]
}

console.log(intersectionArea(rectangle1, rectangle2)); // 6
