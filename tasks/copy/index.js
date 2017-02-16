module.exports = {
    test: {
        files: [
            {
                cwd: '<%= pkg.paths.repositories %>',
                dest: '<%= pkg.paths.app %>',
                expand: true,
                src: [
                    '**'
                ]
            }
        ]
    }
};
