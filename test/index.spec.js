const { assert }  = require('chai');
const { timer, number } = require('./../');

describe('Tools', function() {

    describe('timer', function() {

        it('wait', async () => {
            await timer.wait(1);
        });

        it('tick', async () => {
            await timer.tick();
        });

        it('immediate', async () => {
            await timer.immediate();
        });

    });

    describe('number', function() {

        it('toPercet', () => {
            assert(number.toPercent(0.05 / 4) === 1.25);
        });

    });

});