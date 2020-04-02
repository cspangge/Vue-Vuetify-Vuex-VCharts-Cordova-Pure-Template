const VueCliService = require("@vue/cli-service");
const shell = require('shelljs');

module.exports = function(context) {
    shell.exec('yarn lint --fix') // Format the code before build
    const service = new VueCliService(context.opts.projectRoot);
    service.run("build");
};
