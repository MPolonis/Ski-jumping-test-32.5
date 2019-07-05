const calculateDistancePoints = require('./calculateDistancePoints');
const calculateStylePoints = require('./calculateStylePoints');

const calculateTotalPoints = (distance, hillSize, kPoint, styleNotes, windFactor, gateFactor) => {
    const distancePoints = calculateDistancePoints(distance, hillSize, kPoint);
    const stylePoints = calculateStylePoints(styleNotes);

    if((windFactor !== null) && (windFactor !== '') && (!isNaN(windFactor)) && (gateFactor !== null) && (gateFactor !== '') && (!isNaN(gateFactor))) {
        return distancePoints + stylePoints + windFactor + gateFactor;
    } else {
        return false
    }

}

module.exports = calculateTotalPoints;