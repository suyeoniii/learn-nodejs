//module 사용
const odd = '홀수입니다';
const even = '짝수입니다';

module.exports = {
    odd,
    even,
};

//exports 사용
//module.exports와는 다르게 exports는 객체만 사용가능함, 속성명,속성값 포함되어야함
//모듈에 함수를 대입한 경우에는 exports는 사용불가

/*
exports.odd = '홀수입니다';
exports.even = '짝수입니다';
*/

//exports와 module.exports는 참조관계가 있으므로 한 모듈에 동시에 사용하지 않는 것이 좋음
