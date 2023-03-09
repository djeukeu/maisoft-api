const { createUser } = require('../models/user');

const postUserController = async (req, res) => {
  const body = req.body;
  createUser(body, (err, result) => {
    if (err) {
      console.log(err);
      res.json({ success: 0 });
    } else {
      res.json({ success: 1, result });
    }
  });
};

module.exports = {
  postUserController,
};
