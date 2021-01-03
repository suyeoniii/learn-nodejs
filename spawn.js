const spawn = require('child_process').spawn; //새로운 프로세스를 띄우면서 명령어 실행

const process = spawn('python', ['test.py']);

process.stdout.on('data', function(data) {
    console.log(data.toString());
});

process.stderr.on('data', function(data){
    console.error(data.toString());
});