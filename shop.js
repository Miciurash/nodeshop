module.exports = function (passport, config, i18n, database, info, flash) {
    // Require express
    var express = require('express');
    // Set up express
    var app = express();
    // Require mongostore session storage
    var mongoStore = require('connect-mongo')(express);
    var passport = require('passport');
    // Require needed files

    console.log('NodeShop Started!');

    // Connect to database
    database.startup(config.connection);
    console.log('Connecting to database...');

    // Configure Express
    app.configure(function () {

        // Set up jade
        app.set('views', __dirname + '/shop/views');
        app.set('view engine', 'jade');

        app.use(express.favicon());
        app.use(express.cookieParser());
        app.use(express.bodyParser());

        // Set up sessions
        app.use(express.session({
            // Set up MongoDB session storage
            store: new mongoStore({
                url: config.connection
            }),
            // Set session to expire after 21 days
            cookie: {
                maxAge: new Date(Date.now() + 181440000)
            },
            // Get session secret from config file
            secret: config.cookie_secret
        }));

        /*app.use(flash());
        app.use(function (req, res, next) {
            res.locals.message = res.locals.message || '';
            next();
        });*/

        // Set up passport
        app.use(passport.initialize());
        app.use(passport.session());
        app.use(function (req, res, next) {
            res.locals.authenticated = req.isAuthenticated();
            next();
        });
        
        app.use(i18n.init);
        
        app.use(app.router);

        // Define public assets
        app.use(express.static(__dirname + '/shop/public'));

    });

    app.start = function (port) {
        var port = port||process.env.PORT||config.port||3000;
        app.listen(port);
        console.log('NodeShop v' + info.version + ' listening on port ' + port);

        // Handle all uncaught errors
        process.on('uncaughtException', function (err) {
            console.log(err);
        });
    }



    return app;
};