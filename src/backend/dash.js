'use strict';

let rethinkdbdash = require('rethinkdbdash');

let r = rethinkdbdash({db: 'materialscommons'});

module.exports = r;