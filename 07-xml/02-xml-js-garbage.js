var convert = require('xml-js');
var xml = "adfasdasdsad";
try {
    var result1 = convert.xml2json(xml, {compact: true, spaces: 4});
    var result2 = convert.xml2json(xml, {compact: false, spaces: 4});
} catch(e) {
    console.log("ERROR HAPPEND")
}
console.log(result1, '\n', result2);