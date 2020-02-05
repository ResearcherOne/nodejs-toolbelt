var Haikunator = require('haikunator')

var haikunator = new Haikunator()

var haikus = [];
haikus.push(haikunator.haikunate())
haikus.push(haikunator.haikunate())
haikus.push(haikunator.haikunate())
haikus.push(haikunator.haikunate())
haikus.push(haikunator.haikunate())

console.log(haikus);