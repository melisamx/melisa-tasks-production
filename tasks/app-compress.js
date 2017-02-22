module.exports = function(grunt) {
    
    grunt.config.set('shell.compress', {
        command: [
            'cd <%= pkg.paths.distribution %>',
            'mkdir upload',
            'cd upload',
            'tar -zcf app.tar.gz ../app'
        ].join(' && ')
    });
    
    
    grunt.registerTask('app:compress', 'Compress app', function() {
        
        grunt.task.run('shell:compress');
        
    });
    
};
