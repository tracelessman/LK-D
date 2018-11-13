const Application = require('../lk/LKApplication')
const path = require("path");
const sqlite3 = require("../asars/sqlite3.asar");

let dbName = Application.getCurrentApp().getName()||"default";

db = new sqlite3.cached.Database(path.join(__dirname, dbName+".db"));

db.saveFile = function (filePath,fileName,data) {
    return new Promise((resolve,reject)=>{
        //TODO
        resolve()
    });

}

module.exports = db;
