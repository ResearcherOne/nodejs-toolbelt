function iterate(obj, callback) {
    for (var property in obj) {
        if (obj.hasOwnProperty(property)) {
            if (typeof obj[property] == "object")
                iterate(obj[property], callback);
            else
                callback(obj, property)
        }
    }
}

var obj = {
    "hey": "yo",
    "yoyo": {"lol": 5}
}

iterate(obj, function(obj, property){
    console.log(property + "   " + obj[property]);
    obj[property] = 10;
});

console.log(obj)