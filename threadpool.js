const crypto = require('crypto');

const pass = 'pass';
const salt = 'salt';
const start = Date.now();

crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () => {
    console.log('1', Date.now() - start);
})
crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () => {
    console.log('2', Date.now() - start);
})
crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () => {
    console.log('3', Date.now() - start);
})
crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () => {
    console.log('4', Date.now() - start);
})
crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () => {
    console.log('5', Date.now() - start);
})
crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () => {
    console.log('6', Date.now() - start);
})
crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () => {
    console.log('7', Date.now() - start);
})
crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () => {
    console.log('8', Date.now() - start);
})

//순서가 매번 달라지지만 1-4가 먼저 실행되고 후레 5-8실행됨 스레드풀이 4개이기때문