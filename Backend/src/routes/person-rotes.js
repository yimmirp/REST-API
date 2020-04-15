const { Router } = require('express');
const router = Router();
const BD = require('../config/configbd');

//READ
router.get('/getUsers', async (req, res) => {
    sql = "select * from person where state=1";

    let result = await BD.Open(sql, [], false);
    Users = [];

    result.rows.map(user => {
        let userSchema = {
            "codu": user[0],
            "username": user[1],
            "firstname": user[2],
            "lastname": user[3]
        }

        Users.push(userSchema);
    })

    res.json(Users);
})

//CREATE

router.post('/addUser', async (req, res) => {
    const { username, firstname, lastname } = req.body;

    sql = "insert into person(username,firstname,lastname) values (:username,:firstname,:lastname)";

    await BD.Open(sql, [username, firstname, lastname], true);

    res.status(200).json({
        "username": username,
        "firstname": firstname,
        "lastname": lastname
    })
})






module.exports = router;