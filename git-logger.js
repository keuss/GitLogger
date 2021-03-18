const shell = require('shelljs');

var args = process.argv.slice(2);
console.log('args', args);
var author = args[0];

// see https://github.com/shelljs/shelljs
if (!shell.which('git')) {
    shell.echo('Sorry, this script requires git');
    shell.exit(1);
}

shell.ls('../').forEach(function (file) {
    
    shell.cd(`../${file}`);

    // Run external tool synchronously
    var commits = shell.exec(`git log --author="${author}" --pretty=format:"%h"`);
    var commitArray = commits.split('\n');

    if (commitArray.length > 1) {

        console.log();

        for (var i = 0; i < commitArray.length; i++) {
            // git show --shortstat --date=short --pretty=format:'%h,%ad' 1e00b080 | awk '{printf "%s,",$0} END {print ""}' | awk -vORS="" '1'
            // Run external tool synchronously
            if (shell.exec("git show --shortstat --date=short --pretty=format:'%ad' " + commitArray[i] + " |  awk '{printf \"%s,\", $0} END {print \"\"}' | awk -vORS=\"\" '1'").code !== 0) {
                shell.echo('Error: Git show failed');
                shell.exit(1);
            }
            console.log(` commit[${i}]:${commitArray[i]},${file}`);
        }
    }
});

shell.cd('..');