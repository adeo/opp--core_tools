const path = require('path');
const fs = require('fs');

module.exports.folder = (dir, exclude = []) => {
    let field, result = {}, names = fs.readdirSync(dir);
    for (let name of names) {
        if (path.extname(name) !== '.js')
            continue;
        field = path.basename(name, '.js');
        if (exclude.includes(field))
            continue;
        result[field] = require(path.normalize(path.join(dir, name)));
    }
    return result;
};