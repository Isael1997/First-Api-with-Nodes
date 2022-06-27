const {Router} = require('express');
const router = Router();



router.get('/', (req, res) => {
    const data = {
        "name": "Ronald",
        "Lastname": "Sanchez"
    }
    res.json(data);
});


module.exports = router;