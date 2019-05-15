exports.wait = time => new Promise(resolve => setTimeout(resolve, time));
exports.tick = () => new Promise(resolve => process.nextTick(resolve));
exports.immediate = () => new Promise(resolve => setImmediate(resolve));