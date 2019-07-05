const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');

describe('distancePoints', () => {
    describe('normal hill', () => {
        it('should return distance points for normal hill', () => {
            const receive = calculateDistancePoints(100, 'normal', 98)

            const expected = 64;

            assert.equal(receive, expected);
        });
    });
    describe('large hill', () => {
        it('should return distance points for large hill', () => {
            const receive = calculateDistancePoints(134, 'large', 120)

            const expected = 85.2;

            assert.equal(receive, expected);
        });
    });
    describe('flying hill', () => {
        it('should return distance points for flying hill', () => {
            const receive = calculateDistancePoints(223, 'flying', 200)

            const expected = 147.6;

            assert.equal(receive, expected);
        });
    });
    
});