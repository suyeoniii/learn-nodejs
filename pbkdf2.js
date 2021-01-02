const crypto = require('crypto');

crypto.randomBytes(64, (err, buf) => {
    const salt = buf.toString('base64');
    console.log('salt:', salt);
    crypto.pbkdf2('비밀번호', salt, 100000, 64, 'sha512', (err, key) => {
        console.log('password', key.toString('base64'));
    });
});

//salt <= randomBytes로 만든 64길이 문자열
//pbkdf2(비밀번호, salt, 반복횟수, 출력바이트, 해시알고리즘)
//내부적으로 스레드풀을 사용해 멀티스레딩으로 동작함(두함수모두)