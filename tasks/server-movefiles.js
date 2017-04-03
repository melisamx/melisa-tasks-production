module.exports = function(grunt) {
    
    
    grunt.registerTask('server:movefiles', 'Upload app to server', function() {
        
        var util = require('./util')(grunt).initConfig(),
            enviroment = util.getEnviroment(),
            password = util.getPassword();
        
        grunt.config.set('sshexec.movefiles', {
            options: {
                host: '<%= pkg.server.' + enviroment + '.host %>',
                username: '<%= pkg.server.' + enviroment + '.username %>',
                password: password,
            },
            command: [
                'cd <%= pkg.server.' + enviroment + '.path %>',
                
                /**
                 * http://unix.stackexchange.com/questions/149965/how-to-copy-merge-two-directories
                 */                
                'rsync -avhu app/ <%= pkg.server.' + enviroment + '.pathSrc %>'
            ].join(' && ')
        });
        
        grunt.task.run('sshexec:movefiles');
        
    });
    
};
