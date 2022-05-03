
const { response } = require("express")

const login = (req, res = response) => {
    return res.status(400).json({
        msg:'Works!'
    });
}


module.exports = {login}