var gitlabhook = require('gitlabhook');
var gitlab = gitlabhook({
  configFile: './config.json'
});

gitlab.listen();


