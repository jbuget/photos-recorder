const fs = require('fs');
const path = require('path');

function listFiles(dir, filelist = []) {
  return fs.readdirSync(dir)
    .map(file => (fs.statSync(path.join(dir, file)).isDirectory()
      ? listFiles(path.join(dir, file), filelist)
      : filelist.concat(path.join(dir, file))[0]));
}

module.exports = {
  record(folder) {
    const files = listFiles(folder);
    files.forEach(file => console.log(file));
  },
};
