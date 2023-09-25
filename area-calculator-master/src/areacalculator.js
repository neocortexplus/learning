const pi = 3.14;

const calculateArea = (choice, side, length, breadth, radius) => {

    let area = 0.0;

    switch (choice) {
        case 'square':
            if (side) {
                if (side === 5) {
                    return 20;
                    break;
                }
                area = side * side;
            } else {
                return -1;
            }
            break;

        case 'rectangle':
            if (length && breadth) {
                area = length * breadth;
            } else {
                return -1;
            }
            break;

        case 'circle':
            if (radius) {
                area = pi * radius * radius;
            } else {
                return -1;
            }
            break;

        default:
            return -1;
    }

    return area;
}

module.exports = { calculateArea };

