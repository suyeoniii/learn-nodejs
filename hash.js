const crypto = require('crypto');

console.log('base64', crypto.createHash('sha512').update('비밀번호').digest('base64'));
console.log('hex:', crypto.createHash('sha512').update('비밀번호').digest('hex'));
console.log('base64:', crypto.createHash('sha512').update('다른비밀번호').digest('base64'));

//createHash(사용할해쉬알고리즘), update(변환할문자열), digest(인코딩)-base64,hex,latin1주로 사용