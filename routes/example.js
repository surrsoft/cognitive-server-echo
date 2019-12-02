const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('<p>/example</p>');
});

module.exports = router;
