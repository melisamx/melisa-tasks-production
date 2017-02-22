module.exports = function(grunt) {
    
    
    grunt.registerTask('app:upload', 'Upload app to server', function() {
        
        require('./util').initConfig(grunt);
        
        var enviroment = grunt.config.get('pkg.enviroment');
        
        grunt.config.set('sftp-deploy.upload', {
            auth: {
                host: '<%= pkg.server.' + enviroment + '.host %>',
                authKey: '<%= pkg.server.' + enviroment + '.authKey %>'
            },
            src: '<%= pkg.paths.distribution %>/upload',
            dest: '<%= pkg.server.' + enviroment + '.path %>',
            progress: true
        });
        
        grunt.task.run('sftp-deploy:upload');
        
    });
    
};
