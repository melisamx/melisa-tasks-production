module.exports = function(grunt) {
    
    grunt.registerTask('production:javascript', 'Production enviroment, optimization files JavaScript', function() {
        
        grunt.task.run([
            'uglify:test'
        ]);
        
    });
    
};
