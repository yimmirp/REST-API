const oracledb = require('oracledb');

cns = {
    user: "BD",
    password: "3887",
    connectString: "172.17.0.2/ORCLCDB"
}


async function Open(sql, binds, autoCommit) {
    let cnn = await oracledb.getConnection(cns);
    let result = await cnn.execute(sql, binds, { autoCommit });
    cnn.release();
    return result;
}

exports.Open = Open;