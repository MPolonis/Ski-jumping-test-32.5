const calculateDistancePoints = (distance, hillSize, kPoint) => {
    let startPoints, additionalPoints;

    switch (hillSize) {
        case 'normal' :
            startPoints = 60;
            additionalPoints = 2;
            break;
        case 'large' :
            startPoints = 60;
            additionalPoints = 1.8;
            break;
        case 'flying' :
            startPoints = 120;
            additionalPoints = 1.2;
            break;
    }
    
    const distanceBetweenKPoint = distance - kPoint;
    
    if ((hillSize === 'normal') || (hillSize === 'large') || (hillSize === 'flying')) {
        return startPoints + (distanceBetweenKPoint * additionalPoints);
    }
    else {
        return false
    }
};


module.exports = calculateDistancePoints;