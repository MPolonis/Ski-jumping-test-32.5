const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints');

describe('stylePoints', () => {
    describe('styleScore', () => {
        it('should return sum of points 1', () => {
            const receive = calculateStylePoints([17, 18, 19, 19, 20]);

            const expected = 56;

            assert.equal(receive, expected);
        });

        it('should return sum of points 2', () => {
            const receive = calculateStylePoints([17, 18, 19, 19]);

            const expected = false;

            assert.equal(receive, expected);
        });

        it('should return sum of points 3', () => {
            const receive = calculateStylePoints([17, 18, 19, 19, '']);

            const expected = false;

            assert.equal(receive, expected);
        });

        it('should return sum of points 4', () => {
            const receive = calculateStylePoints([17, 18, 19, 19, null]);
            
            const expected = false;

            assert.equal(receive, expected);
        });
        it('should return sum of points 5', () => {
            const receive = calculateStylePoints([0, 0, 0, 0, 0]);

            const expected = 0;

            assert.equal(receive, expected);
        });
        it('should return sum of points 6', () => {
            const receive = calculateStylePoints([20, 20, 20, 20, 20]);

            const expected = 60;

            assert.equal(receive, expected);
        });
        it('should return sum of points 7', () => {
            const receive = calculateStylePoints([17, 18.5, 19, 19, 20]);

            const expected = 56.5;

            assert.equal(receive, expected);
        });
    })
})