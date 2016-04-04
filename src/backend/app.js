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
var user = require('./db/user');
var action = require('./db/actions');
var appreciate = require('./db/appreciate');
var browse = require('./db/browse');
var view = require('./db/view');
var tag = require('./db/tag');
var comment = require('./db/comment');
var download = require('./db/download');

var users = require('./users');
var apikey = require('./apikey')(users);


var app =  koa();
app.use(cors());
app.use(apikey);
router.prefix('/api/v1');
router.get('/datasets', release.getAll);
router.get('/datasets/recent', release.getRecent);
router.get('/datasets/views', release.getTopViews);
router.get('/datasets/:id/user/:user_id', release.getOne);
router.post('/users', user.create);
router.get('/user/:email', user.get);
router.get('/actions/:dataset_id', action.getAll);
router.post('/appreciate', appreciate.addAppreciate);
router.del('/appreciate/user/:user_id/dataset/:dataset_id', appreciate.removeAppreciation);
router.post('/views', view.addView);
router.post('/comments', comment.addComment);
router.post('/tags', tag.addTag);
router.put('/tags', tag.removeTag);
router.get('/tags', tag.getAllTags);
router.get('/processes/types', browse.getProcessTypes);
router.get('/samples', browse.getSamples);
router.get('/tags/:id/datasets', tag.getDatasetsByTag);


app.use(router.routes());
app.use(router.allowedMethods());

app.listen(5000);
console.log('server is listening on 5000');

