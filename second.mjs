import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const jsonfile = require('jsonfile');
const simpleGit = require('simple-git');
import { default as random } from 'random';
const moment = require('moment');

//console.log('run');
//console.log(moment);
const commit = z => {
//console.log(z);
if (z == 0) { console.log("Done: 100%"); simpleGit().push(); return; };
const filePath = './random.json';
const date = moment().subtract(1, "y").add(Math.floor(z / 10), "d").format();

const data = {
    date: date,
    random: random.int(0, 1000000)
}

jsonfile.writeFile(filePath, data);
//console.log(z);
//console.log(date);
process.stdout.write("Done: " + Math.floor((3650 - z) / 3650 * 100) + "%\r");
simpleGit().add([filePath]).commit(date + random.int(0, 100000), {"--date": date}, commit.bind(this, --z));
}
commit(3650);
