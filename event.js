const EventEmitter = require('events');

const myEvent = new EventEmitter();
myEvent.addListener('event1', () => { //on과 같은 기능
    console.log("이벤트1");
});
myEvent.on('event2', () => {
    console.log("이벤트2");
});
myEvent.on('event2', () => {
    console.log("이벤트2 추가");
});
myEvent.once('event3', () => {  //한번만 실행
    console.log("이벤트3");
});

myEvent.emit('event1'); //호출
myEvent.emit('event2');
myEvent.emit('event3');
myEvent.emit('event3');

myEvent.on('event4', () => {
    console.log("이벤트4");
});
myEvent.removeAllListeners('event4');
myEvent.emit('event4');

const listener = () => {
    console.log('이벤트5');
};
myEvent.once('event5', listener);
myEvent.removeListener('event5', listener);
myEvent.emit('event5');

console.log(myEvent.listenerCount('event5')); //연결된 리스너 출력
//off: removeListener과 같은 기능