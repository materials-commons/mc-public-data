/*
 Todo: Module Dependencies
 @author:
 @date: 1/4/16
 @time: 4:40 PM
 */


var koa = require('koa');
var router = require('koa-router')();
var parse = require('co-body');
var http = require('http');
var r = require('./dash');
var cors = require('koa-cors');


var app =  koa();
app.use(cors());
router.prefix('/api/v1');

router
    .get('/releases', function *(next){
        this.body = yield r.table('releases').merge(function(rel){
            return {
                'files': r.db('materialscommons').table('datafiles').getAll(r.args(rel('datafiles'))).coerceTo('array')
            }
        });
    })
    .post('/releases', function *(next){
        var release = yield parse(this);
        yield r.table('releases').insert(release, {returnChanges: true});
    });

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(5000);
console.log('server is listening on 5000');

