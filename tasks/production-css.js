module.exports = function(grunt) {
    
    grunt.registerTask('production:css', 'Production enviroment, optimization files CSS', function() {
        
        grunt.task.run([
            'cssmin:test'
        ]);
        
    });
    
};
