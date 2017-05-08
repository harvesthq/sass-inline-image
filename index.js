// Credit to:
// https://coderwall.com/p/fhgu_q/inlining-images-with-gulp-sass
const fs    = require('fs');
const path  = require('path');
const types = require('node-sass').types;

module.exports = function(options) {
    options = options || {};

    const base = options.base || process.cwd();
    return {
        'inline-image($file)': function(file) {
            // we want to file relative to the base
            const relativePath = './' + file.getValue();
            const filePath = path.resolve(base, relativePath);

            // get the file ext
            const ext = filePath.split('.').pop();

            // read the file
            const data = fs.readFileSync(filePath);

            const buffer = new Buffer(data);
            const str = "url('data:image/" + (ext === 'svg' ? ext + '+xml' : ext)  + ";base64," + buffer.toString('base64') + "')";
            return types.String(str);
        }
    };
};
