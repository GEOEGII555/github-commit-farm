import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const jsonfile = require('jsonfile');
const simpleGit = require('simple-git');
import { default as random } from 'random';
const moment = require('moment');

console.log('run');
console.log(moment);
const commit = z => {
console.log(z);
if (z == 0) { simpleGit().push(); return; };
const x = random.int(0, 54);
const y = random.int(0, 6);
const filePath = './random.json';
const date = moment().subtract(1, "y").add(1, "d").add(x, "w").add(y, "d").format();

const data = {
    date: date
}

jsonfile.writeFile(filePath, data);
console.log(z);
simpleGit().add([filePath]).commit(date + random.int(0, 100000), {"--date": date}, commit.bind(this, --z));
}
commit(5000);
