const express = require('express');
const router = express.Router();

// Setup a default catch-all route that sends back a welcome message in JSON format.
router.get('/', (req, res) => res.status(200).send({
    message: 'Welcome to Home',
    })
    );


module.exports=router;