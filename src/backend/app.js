/*
 Todo: Module Dependencies
 @author:
 @date: 1/4/16
 @time: 4:40 PM
 */


var koa = require('koa');
var router = require('koa-router')();
var cors = require('koa-cors');
var release = require('./db/release');


var app =  koa();
app.use(cors());
router.prefix('/api/v1');

router.get('/datasets', release.getAll);
router.get('/datasets/:id', release.getOne);


app.use(router.routes());
app.use(router.allowedMethods());

app.listen(5000);
console.log('server is listening on 5000');

