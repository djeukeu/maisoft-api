const { Router } = require('express');
const {
  postUserController,
  getUserByEmailController,
} = require('../controllers/user');

const router = Router();

router.post('/register', postUserController);
router.post('/login', getUserByEmailController);

module.exports = router;
