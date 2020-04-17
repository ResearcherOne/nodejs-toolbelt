function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

function requestPolicyCheck(name, callback) {
    const randomInt = getRandomInt(10);
    setTimeout(function(){
        callback(null, name+" "+randomInt);
    }, 1000 * randomInt);
}

var policyCheckPromises = [];

for(i = 0; i < 9; i++) {
    var policyCheckPromise = new Promise(function(resolve, reject) {
        requestPolicyCheck("Me Random Call", function(err, res){
            if(!err) {
                resolve(res);
            } else {
                reject(err);
            }
        });
    });

    policyCheckPromises.push(policyCheckPromise);
}

Promise.all(policyCheckPromises)
.then(function(accessPolicyCheckResults) {
    console.log(accessPolicyCheckResults)
    /*
        [
            'Me Random Call 7',
            'Me Random Call 8',
            'Me Random Call 1',
            'Me Random Call 1',
            'Me Random Call 3',
            'Me Random Call 5',
            'Me Random Call 3',
            'Me Random Call 9',
            'Me Random Call 4'
        ]
    */
}).catch(error => { 
    console.error(error)
  });