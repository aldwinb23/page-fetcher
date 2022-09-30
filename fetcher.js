
const newArgv = process.argv.slice(2);
const URL = newArgv[0];
const filePath = newArgv[1];
const request = require('request');
const fs = require('fs');

request(URL, (error, response, data) => {
  if (error) throw Error(); 
  indexWrite(filePath, data);
})

const indexWrite = (filePath, data) => {
  fs.writeFile(`${filePath}`, data, "utf8", (error) => {
    if (error) throw Error();
    const stats = fs.statSync(filePath)
    sizeOfFile(stats)
  })
};

const sizeOfFile = (stats) => {
  let fileSize = stats.size;
  console.log(`Downloaded and saved ${fileSize} bytes to ${filePath}`);
}
