var repositories = require('../config').repositories,
    repos = [];

for(var i in  repositories) {
    
    if( typeof repositories[i] === 'string') {
        repos.push({
            path: [
                '<%= pkg.paths.repositories %>'
            ],
            repo: repositories[i]
        });
    } else {
        repos.push({
            path: [
                '<%= pkg.paths.repositories %>'
            ],
            repo: repositories[i].url,
            branch: repositories[i].branch || null,
            tag: repositories[i].tag || null
        });
    }
    
}

module.exports = {
    test: {
        repos: repos
    }
};
