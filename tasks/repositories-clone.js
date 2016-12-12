module.exports = function(grunt) {
    
    grunt.registerTask('repositories:clone', 'Clone repositories', function() {
        
        grunt.task.run([
            'gitPull:test'
        ]);
        
    });
    
};
