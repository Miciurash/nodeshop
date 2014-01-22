'use strict';

var container = require('dependable').container();


container.register('passport', require('passport'));
container.register('flash', require('connect-flash'));

container.register('options', require('./shop/config.json'));
container.register('i18n', require('./shop/lib/i18n'));

container.register('config', require('./shop/config.json'));
container.register('info', require('./package.json'));
container.register('database', require('./shop/data'));


container.register('shop', require('./shop'));

container.register('router', require('./shop/router'));

container.resolve(function(shop, router){
    shop.start();
    admin.start();
})