const path = require('path');
const fs = require('fs');

module.exports.folder = (dir, exclude = [], result = {}) => {
    let stat, field, names = fs.readdirSync(dir);
    for (let name of names) {
        stat = fs.statSync(`${dir}/${name}`);
        if (stat.isDirectory()) {
            result[name] = {};
            module.exports.folder(`${dir}/${name}`, exclude, result[name]);
            continue;
        }
        if (path.extname(name) !== '.js')
            continue;
        field = path.basename(name, '.js');
        if (exclude.includes(field))
            continue;
        result[field] = require(path.normalize(path.join(dir, name)));
    }
    return result;
};