const fs = require('fs');

/* ugly way to write 
function miqdadReadFile(cb) {
    fs.readFile('a.txt','utf-8',function(err, data){
        cb(data);
    })
}

// call back function to call
function onData(data) {
    console.log(data);
}

miqdadReadFile(onData);*/

// cleaner way (Promises)

/*function miqdadReadFile() {
    return new Promise(function(resolve){
        fs.readFile('a.txt','utf-8',function(err, data){
            resolve(data);
        })
    })
}

// call back function to call
function onDone(data) {
    console.log(data);
}

miqdadReadFile().then(onDone);*/

// var d = new Date();
// console.log(d.getDate());

var d = new Promise(function(resolve){
    
});
console.log(d);