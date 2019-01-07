const { Router } = require('express');
const router = Router();

router.get('/test', (req, res) => {
    const data = {
        "name": "Fazt",
        "website": "www..."
    }
    res.json(data);
});

module.exports = router;
