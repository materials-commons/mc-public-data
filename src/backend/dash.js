'use strict';

let rethinkdbdash = require('rethinkdbdash');

let ropts = {
    db: process.env.MCDB || 'materialscommons',
    port: process.env.MCDB_PORT || 30815
};

let r = rethinkdbdash(ropts);

module.exports = r;