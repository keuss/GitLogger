# GitLogger
GitLogger

 - `git clone https://github.com/keuss/GitLogger`
 - `npm i`
 - `node git-logger.js <author>` or `./start.sh "Guillaume GALLOIS" > log.txt`
 - Work with all foldes from parent directory

Use [shelljs](https://github.com/shelljs/shelljs) and some AWK command ;-)

Produce output like this `'2020-06-15', 3 files changed, 20 insertions(+), 14 deletions(-), commit[0]:3ec1520,myproject`

To list all user from repo : `git shortlog -sn --all`
