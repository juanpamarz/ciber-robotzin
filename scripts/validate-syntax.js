const fs = require('fs');
const path = require('path');
const vm = require('node:vm');

function read(filePath) {
    return fs.readFileSync(path.join(__dirname, '..', filePath), 'utf8');
}

function validateCommonJs(filePath) {
    new vm.Script(read(filePath), { filename: filePath });
}

function validateModule(filePath) {
    new vm.SourceTextModule(read(filePath), { identifier: filePath });
}

validateCommonJs('server/server.js');

for (const file of fs.readdirSync(path.join(__dirname, '..', 'client/js/scenes'))) {
    if (file.endsWith('.js')) {
        validateModule(`client/js/scenes/${file}`);
    }
}

console.log('Syntax validation passed.');
