const db = require('../store/ElecSqlite')
class TopUtil {
  static dropExtraTable () {
    const tableAry = [
      'contact', 'device', 'group_record_state',
      'magicCode', 'mfapply', 'org', 'groupMember',
      'record', 'chat', 'flowCursor'
    ]
    const psAry = []
    for (let ele of tableAry) {
      const sql = `
      drop table ${ele}
    `
      psAry.push(runSql(db, sql))
    }
    return Promise.all(psAry).then(()=>{
      console.log(`${tableAry} dropped successfully`)
    }).catch(err => {
      console.error(err)
    })
  }
}

function runSql(database, sql, param = []) {
  return new Promise((resolve, reject) => {
    database.run(sql, param, (err) => {
      if(err) {
        reject(err)
      }else {
        resolve()
      }
    })
  })
}

Object.freeze(TopUtil)
module.exports = TopUtil
