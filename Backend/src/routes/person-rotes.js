const { Router } = require('express');
const router = Router();
const BD = require('../config/configbd');

router.get('/', async (req, res) => {
    sql = "select * from person where state=1";

    let result = await BD.Open(sql, [], false);
    console.log(result.rows);
    res.json('TODO OKEII');
})



module.exports = router;