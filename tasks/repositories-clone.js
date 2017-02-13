module.exports = function(grunt) {
    
    grunt.registerTask('repositories:clone', 'Clone repositories', function() {
        
        var repositories = require('./gitpull/index');
        
        grunt.config.set('gitPull', repositories);
        
        grunt.task.run([
            'gitPull:test'
        ]);
        
    });
    
};
