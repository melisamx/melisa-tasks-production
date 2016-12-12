module.exports = {
    test: {
        files: [
            {
                expand: true,
                cwd : '<%= pkg.paths.app %>',
                src: [
                    '**/*.css',
                    '!**/node_modules/**',
                    '!**/*.min.css',
                    '!public/vendor/**'
                ],
                dest: '<%= pkg.paths.app %>'
            }
        ]
    }
};
