var fs = require('fs');

        // console.log('A');
        // var result = fs.readFileSync('sample.txt','utf8');
        // console.log(result);

        // console.log('C');

        console.log('A');

        fs.readFile('sample.txt','utf8',(err, data) => {
            console.log(data);
            // => [Error: EISDIR: illegal operation on a directory, read <directory>]
          });
          console.log('C');  

          //콜백

          var a = function(){

          }

          a(); //위 두 함수 같음 - 자바스크립트에서 함수는 변수

          function slowfunc(callback){
              callback();
          }
        
          slowfunc(a);