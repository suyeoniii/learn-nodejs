const path = require('path');

const string = __filename;

console.log(path.sep);  //경로의 구분자 - 윈도는 \ , POSIX는 / 
console.log(path.delimiter);  //환경변수 구분자 - 윈도는 ;, POSIX는 :
console.log(path.dirname(string));  //파일이 위치한 폴더경로 보여줌
console.log(path.extname(string)); //파일의 확장자 보여줌
console.log(path.basename(string, 'js'));  //파일의 이름을 표시(확장자 포함됨) - 확장자를 제외한 파일만 보고싶다면 두번째 인수로 확장자
console.log(path.parse(string)); //파일 경로를 root dir base ext name으로 분리
console.log(path.format(path.parse(string)));  //path.parse한 객체를 파일 경로로 합칩니다
console.log(path.normalize('/Users//suyeon//Desktop/Nodejs.js/path.js'));  //  '\', '/' 등을 혼용했을때 정상적인 경로 반환
console.log(path.isAbsolute('/Users/suyeon/Desktop/Nodejs.js/path.js'));  //파일의 경로가 절대경로인지 상대경로 인지를 t/f로 알림
console.log(path.relative('/Users/suyeon/Desktop/Nodejs.js/path.js', '/Users/suyeon/Desktop/Nodejs.js'));  //경로를 두번 넣으면 첫번째 경로에서 두번째 경로로 가는 법을 알림
console.log(path.join(__dirname, '..', '..', '/Users', '.', '/suyeon'));  //여러 인수를 넣으면 하나의 경로로 합침 - '/'를 만나면 상대경로로 처리함
console.log(path.resolve(__dirname, '..', '/Users', '.', '/suyeon'));  //  '/'를 만나면 절대경로로 인식해서 앞의 경로를 무시하고 경로를 합침