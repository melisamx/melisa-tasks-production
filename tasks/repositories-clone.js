module.exports = function(grunt) {
    
    grunt.registerTask('respositories:clone', 'Clone repositories', function() {
        
        grunt.task.run([
            'gitPull:test'
        ]);
        
    });
    
};
