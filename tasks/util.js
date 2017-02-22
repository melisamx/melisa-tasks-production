module.exports = function(grunt) {
    
    return {
        
        initConfig: function() {

            var application = grunt.config.get('pkg.application') || 'melisa',
                serverConfig = grunt.config.get('pkg.server'),
                applicationServerConfig = require('../applications/' + application),
                extend = require('util')._extend;

            grunt.config.set('pkg.server', extend(serverConfig, applicationServerConfig.server));
            return this;

        },
        
        getEnviroment: function() {
            
            return grunt.config.get('pkg.enviroment') || 'local';
            
        },

        getPassword: function() {

            var enviroment = this.getEnviroment(),
                ftppass = JSON.parse(grunt.file.read('.ftppass')),
                authKey;

            authKey = grunt.config.get('pkg.server.' + enviroment + '.authKey');

            return ftppass[authKey].password

        }
    };
    
};