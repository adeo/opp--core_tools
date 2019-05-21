const { assert }  = require('chai');
const { timer, number, require: req } = require('./../');

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

    describe('require', function() {

        it('folder', () => {
            let result = req.folder(`${__dirname}/../src`);
            assert(result.number === number);
            assert(result.timer === timer);
            assert(result.require === req);
        });

    });

});