//셀을 이용한 명령어 수행
const exec = require('child_process').exec;

const process = exec('ls');

process.stdout.on('data', function(data) {
    console.log(data.toString());
});   //실행결과

process.stderr.on('data', function(data) {
    console.error(data.toString());
});  //실행에러