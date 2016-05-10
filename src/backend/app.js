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
var path = require('path');
var koaBody = require('koa-body')({
  multipart: true,
  formidable: {uploadDir: './../assets/user-images'},
  keepExtensions: true
});
var apikey = require('./apikey')();


var app = koa();
app.use(cors());
app.use(apikey);
router.get('/datasets', release.getAll);
router.get('/datasets/count', release.getAllCount);
router.get('/datasets/recent', release.getRecent);
router.get('/datasets/views', release.getTopViews);
router.get('/datasets/:id/user/:user_id', release.getOne);
router.get('/user/:email', user.get);
router.get('/actions/:dataset_id', action.getAll);
router.post('/appreciate', appreciate.addAppreciate);
router.put('/appreciate/remove', appreciate.removeAppreciation);
router.post('/views', view.addView);
router.post('/comments', comment.addComment);
router.post('/tags', tag.addTag);
router.put('/tags', tag.removeTag);
router.get('/tags', tag.getAllTags);
router.get('/tags/count', tag.getAllCount);
router.get('/tags/bycount', tag.getTagsByCount);
router.get('/tags/:id/datasets', tag.getDatasetsByTag);
router.get('/processes/types', browse.getProcessTypes);
router.get('/samples', browse.getSamples);
router.get('/authors/count', browse.getAllAuthorsCount);
router.get('/authors/datasets', browse.getAuthors);
router.post('/upload', koaBody, user.upload);


app.use(router.routes());
app.use(router.allowedMethods());

app.listen(5000);
console.log('server is listening on 5000');

