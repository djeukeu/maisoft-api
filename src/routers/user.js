const { Router } = require('express');
const {
  postUserController,
} = require('../controllers/user');

const router = Router();

router.post('/', postUserController);

module.exports = router;
