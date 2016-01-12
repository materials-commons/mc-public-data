/*
 Todo: Module Dependencies
 @author:
 @date: 1/4/16
 @time: 4:40 PM
 */


var koa = require('koa');
var router = require('koa-route');
var parser = require('koa-bodyparser');
var logger = require('koa-logger');
var cors = require('koa-cors');
var request = require('koa-request');

/*
 Expose App
 */

var app =  koa();

/*
 Mount body parser, cors and logger
 */

app.use(parser());
app.use(logger());
app.use(cors());

/*
  Mount routes
 */

app.use(router.get('/api/v1/users', function *(){
    yield "A";
    console.log('finished A');
    //yield "B";
    console.log('finished B');
    console.log('finished C');

}));

/*
Listen on PORT
 */
app.listen(5000);
console.log('server is listening on 5000');

