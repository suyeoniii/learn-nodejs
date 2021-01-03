const{
    Worker, isMainThread, parentPort,
} = require('worker_threads');

if (isMainThread) { //부모일때
    const
    worker = new Worker(__filename);
    worker.on('message', message => console.log('from worker', message));
    worker.on('exit', () => console.log('worker exit'));
} else {  //워커일때
    parentPort.on('message', (value) => {
        console.log('from parent', value);
        parentPort.postMessage('pong');
        parentPort.close();
    });
}