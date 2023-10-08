
import crypto from 'node:crypto'
//- ------ Asynchronous parallel calls example
// incrasing the size of the thread pool in libuv
process.env.UV_THREADPOOL_SIZE = "8";
const MAX_CALLS = 6
let total_time = 0;

const start = Date.now();
for (let i = 0; i < MAX_CALLS; i++) { 
    crypto.pbkdf2("password", "salt", 100000, 512, "sha256", () => { 
        const curTime = (Date.now() - start) / 1000;
        total_time += curTime;
        console.log( `Hashing : ${i + 1 },  ${curTime}` );
    });
}

// Few async methos like  fs.readFile and crypto.pbkdf2 run on a separate thread in libuv's thread pool
// The do run synchronously in their own thread 
// The main thread appears to be running asynchronously