const os = require('os');
console.log(os.platform());//process.platform과 동일
console.log(os.uptime()); //켜진후 경과시간
console.log(os.cpus().length); //코어개수
console.log(os.freemem());  //사용가능 메모리
console.log(os.totalmem());   //전체메모리