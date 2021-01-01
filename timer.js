const timeout = setTimeout(() => {
    console.log('1.5초 후 실행');
}, 1500);

const interval = setInterval(() => {
    console.log('1초 마다 싫행');
}, 1000);

setTimeout(() => {
    clearInterval(interval)
}, 2500);

const immediate = setImmediate(() => {
    console.log('즉시실행');
});