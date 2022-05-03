
const { Router } = require('express');
const { login } = require('../controllers/auth');

const router = Router();
 

const logi = () => {
    console.log('Works!');
}

router.get('/login', login); 

module.exports = router;