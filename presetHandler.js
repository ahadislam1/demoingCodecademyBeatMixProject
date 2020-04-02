// Use this presets array inside your presetHandler
const presets = require('./presets');

// Complete this function:
const presetHandler = (method, index, array) => {
    if (method === 'GET') {
        if (presets[index] != undefined) {
            return [200, presets[index]]
        } else {
            return [404]
        }
    } else if (method === 'PUT') {
        if (presets[index] != undefined) {
            presets[index] = array
            return [200, array]
        } else {
            return [404]
        }
    } else if (method != 'GET' || method != 'PUT') {
        return [400]
    } else {
        return [404]
    }
};

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
