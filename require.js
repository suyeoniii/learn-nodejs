module.exports = '저를 찾아보세요';

require('./var');

console.log(require.cache);
console.log(require.main === module);
console.log(require.main.filename);