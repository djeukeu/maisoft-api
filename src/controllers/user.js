const { createUser, readUserByEmail } = require('../models/user');
const { ErrorHandling } = require('../error/ErrorHandling');
const { tokenGenerator } = require('../utils/tokenGenerator');
const { isHash } = require('../utils/compareHash');

const postUserController = (req, res) => {
  const body = req.body;
  createUser(body, (err, result) => {
    if (err) {
      const error = ErrorHandling(err);
      res.json(error);
    } else {
      const token = tokenGenerator(result.id);
      res.json({ success: 1, token, user: result });
    }
  });
};

const getUserByEmailController = (req, res) => {
  const body = req.body;
  readUserByEmail(body, async (err, result) => {
    if (err) {
      const error = ErrorHandling(err);
      res.json(error);
    } else {
      if (!result) {
        res.json({ success: 1, code: 'USER_NOT_FOUND' });
        return;
      }
      const isMatch = await isHash(body.password, result.hash);
      if (!isMatch) {
        res.json({ success: 1, code: 'WRONG_PASSWORD' });
        return;
      }
      const token = tokenGenerator(result.id);
      res.json({ success: 1, token, user: result });
    }
  });
};

module.exports = {
  postUserController,
  getUserByEmailController,
};
