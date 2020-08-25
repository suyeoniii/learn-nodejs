var http = require('http');
var fs = require('fs'); //nodejs모듈인 파일시스템 다룰수 있게됨
var url = require('url');

function templateHTML(title, list, body) {
  return `<!doctype html>
  <html>
  <head>
    <title>WEB1 - ${title}</title>
    <meta charset="utf-8">
  </head>
  <body>
    <h1><a href="/">WEB</a></h1>
    <h2>${title}</h2>
    ${list}
    ${body}
  </body>
  </html>
  `;
}
function templateList(files) {
  var list = '<ul>';
  var i = 0;
  while (i < files.length) {
    list = list + `<li><a href="/?id=${files[i]}">${files[i]}</a></li>`;
    i = i + 1;
  }
  list = list + '</ul>';
}

var app = http.createServer(function (request, response) { //서버 객체
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  var title = queryData.id;
  var pathname = url.parse(_url, true).pathname;

  if (pathname === '/') {
    if (queryData.id === undefined) {

      fs.readdir('./data/', (err, files) => {

        var title = 'Welcome';
        var description = 'Hello node.js';

        var list = templateList(files);

        var template = templateHTML(title, list, `<h2>${title}</h2>${description}`);
        response.writeHead(200);
        response.end(template);

      });
    }

    else {
      fs.readdir('./data/', (err, files) => {

        templateList(files);
        fs.readFile(`data/${title}`, 'utf8', (err, description) => {


          var template = templateHTML(title, list, `<h2>${title}</h2>${description}`);
          response.writeHead(200);
          response.end(template);
        });
      });
    }
  }
  else {
    response.writeHead(404);
    response.end('Not found');
  }
});
app.listen(3000);