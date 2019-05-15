const { assert }  = require('chai');
const { timer } = require('./../');

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

});