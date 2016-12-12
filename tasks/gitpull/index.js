var repositories = require('../config').repositories,
    repos = [];

for(var i in  repositories) {
    
    repos.push({
        path: [
            '<%= pkg.paths.repositories %>'
        ],
        repo: repositories[i]
    });
    
}

module.exports = {
    test: {
        repos: repos
    }
};
