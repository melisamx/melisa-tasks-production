module.exports = {
    test: [
        '<%= pkg.paths.distribution %>/*',
        '!.gitignore'
    ],
    git: '<%= pkg.paths.app %>/.git'
};
