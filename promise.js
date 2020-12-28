//콜백대신 프로미스 사용
const condition = true;
const promise = new Promise((resolve, reject) => {  //프로미스 객체생성
    if(consdition){
        resolve('성공');
    }
    else{
        reject('실패');
    }
});
//다른코드 들어갈 수 있음
promise
    .then((message) => { //resolve인 경우 
        console.log(message);
        return new Promise((resolve, reject) => {
            resolve(message);
        });
    })
    .then((message2) => {
        console.log(message2);
        return new Promise((resolve, reject) => {
            resolve(message2);
        })
    })
    .catch((error) => {  //reject인 경우
        console.error(error);
    })
    .finally(() => {  //무조건 실행되는 경우
        console.log('무조건');
    });

//프로미스는 실행은 바로하되 결과값은 실행이 완료된 후 then, catch를 통해 받을 수 있는 객체라고 할 수 있음
