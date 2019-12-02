const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('<h2>Welcome to "cognitive-server-echo" project</h2>' +
    '<a href="/static">/static</a>' +
    '</br></br><a href="/example">/example</a>'
  );
});

module.exports = router;
