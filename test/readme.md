Any files related to testing should be stored here. This includes the test classes as well as any configuration files, test runners, etc.

### Running the tests

- You can simply open `test-runner.html` in your browser
- If you have [phantomjs](https://github.com/ariya/phantomjs) installed, you can run the following command: ` phantomjs ./test/config/phantomjs_jasminexml_runner.js ./test/test-runner.html ./test/results`

### Modifying tests
If you edit a test file (a JavaScript file here in this directory), you don't have to do anything before running the tests. 

If you add / remove /rename a test file, you need to regenerate the HTML test runner. You need PHP for this. Simply run `php ./test/writeTestRunnerFile.php`.
By default, any JavaScript files in this directory at the time the test runner is generated will be loaded in the test runner.

The files which are to loaded in the test runner are defined in `config/config.yml`:
```yaml
load:
 - config/jasmine/jasmine.js
 - config/jasmine/jasmine-html.js
 - config/jasmine.phantomjs-reporter.js
 - bootstrap/*.js #set up purify for the test environment
 - util/*.js #test utils
 - ../source/js/*.js #source JavaScript files to test
 - *.js #test specs
```
_(config.yml - January 23rd 2013)_

First, some files are loaded which actually are used to run the tests themselves.
The `bootstrap` directory contains anything required to set the test environment; to initialize anything that the source files depends on to run.

The `util` contains test-specific utility files and common functions. For example, if you wanted to use jQuery in the tests, add it to the `util` directory.

As of January 23rd 2013, the YAML parsing is very limited; each entry must end with `*.js` or `.js` (wildcards are not permitted anywhere else) and URLs are not yet supported.