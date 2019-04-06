const db = require('../store/ElecSqlite')
class TopUtil {
  static dropExtraTable () {
    const tableAry = [
      'contact', 'device', 'group_record_state',
      'magicCode', 'mfapply', 'org', 'groupMemeber',
      'record', 'chat', 'flowCursor'
    ]
    for (let ele of tableAry) {
      const sql = `
      drop table ${ele}
    `
      console.log({sql})
      db.run(sql)
    }
  }
}

Object.freeze(TopUtil)
module.exports = TopUtil
