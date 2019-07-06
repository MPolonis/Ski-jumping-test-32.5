const assert = require('assert');
const calculateTotalPoints = require('./calculateTotalPoints');

describe('totalPoints', () => {
    describe('numberOfPoints', () => {
        it('should return total points for normal hill 1', () => {
            const receive = calculateTotalPoints(100, 'normal', 98, [19, 18, 19, 20, 17], -5, 3.2)

            const expected = 118.2;

            assert.equal(receive, expected);
        });
        it('should return total points for normal hill 2', () => {
            const receive = calculateTotalPoints(100, 'sth.', 98, [19, 18, 20, 17], null, 3.2)

            const expected = false;

            assert.equal(receive, expected);
        });
        it('should return total points for large hill 1', () => {
            const receive = calculateTotalPoints(134, 'large', 120, [19, 18, 19, 20, 20], -10, 3)

            const expected = 136.2;

            assert.equal(receive, expected);
        });
        it('should return total points for large hill 2', () => {
            const receive = calculateTotalPoints(134, 'large', 120, [19, 18, 19, 20, 20], undefined, 3)

            const expected = false;

            assert.equal(receive, expected);
        });
        it('should return total points for flying hill', () => {
            const receive = calculateTotalPoints(223, 'flying', 200, [19, 18, 19, 20, 20], 3, 5)

            const expected = 213.6;

            assert.equal(receive, expected);
        })
    });
});