
const path = require("path");
const sqlite3 = require("../asars/sqlite3.asar")
const fse = require('fs-extra')

let dbName = engine.getApplication().getCurrentApp().getName()||"default";

let db = new sqlite3.cached.Database(path.join(__dirname, dbName+".db"));

db.saveFile =  (filePath,fileName,data) => {
  return new Promise((resolve)=>{
    const folder = path.resolve(__dirname, '../external') + filePath
    fse.ensureDirSync(folder)
    const url = path.resolve(folder, fileName)
    fse.writeFileSync(url, data, 'base64')
    resolve(url)
  })

}

module.exports = db;
