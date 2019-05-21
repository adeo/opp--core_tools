const path = require('path');
const fs = require('fs');

module.exports.folder = dir => {
    let result = {}, names = fs.readdirSync(dir);
    for (let name of names) {
        if (path.extname(name) !== '.js')
            continue;
        result[path.basename(name, '.js')] = require(path.normalize(path.join(dir, name)));
    }
    return result;
};