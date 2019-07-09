module.exports.ksort = object => {
    let result = {},
        keys   = Object.keys(object);
    keys.sort();
    for (let key of keys)
        result[key] = object[key];
    return result;
};