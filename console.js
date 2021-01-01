const string = 'abc';
const number = 1;
const boolean = true;
const obj = {
    Outside: {
        inside: {
            key: 'value',
        },
    },
};
console.time('전체시간');
console.log(string, number, boolean);
console.error('에러메세지 담는곳');
console.table([{ name: '제로', birth: 1994 }, {name: 'hero', birth: 1988}]);
//console.dir는 객체를 콘솔에 표시할때 사용함
//첫번째 인수는 표시할 객체, 두번째 인수는 옵션, depth기본값은 2
console.dir(obj, {colors: false, depth: 2});
console.dir(obj, { colors: true, depth: 1});

console.time('시간측정');
for(let i = 0; i< 100000; i++){}
console.timeEnd('시간측정');

function b(){
    console.trace('에러위치추적');  //에러위치가 나오지 않는다면 에러발생 위치 알수있음
}
function a(){
    b();
}
a();
console.timeEnd('전체시간');
