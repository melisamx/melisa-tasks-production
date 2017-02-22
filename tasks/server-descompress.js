module.exports = function(grunt) {
    
    
    grunt.registerTask('server:descompress', 'Descompress app on server', function() {
        
        var util = require('./util')(grunt).initConfig(),
            enviroment = util.getEnviroment(),
            password = util.getPassword();
        
        grunt.config.set('sshexec.descompress', {
            options: {
                host: '<%= pkg.server.' + enviroment + '.host %>',
                username: '<%= pkg.server.' + enviroment + '.username %>',
                password: password,
            },
            command: [
                'cd <%= pkg.server.' + enviroment + '.path %>',
                'tar -xzf app.tar.gz'
            ].join(' && ')
        });
        
        grunt.task.run('sshexec:descompress');
        
    });
    
};
