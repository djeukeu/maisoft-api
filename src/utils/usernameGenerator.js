const { generateFromEmail } = require('unique-username-generator');

const usernameGenerator = (email) => {
  const username = generateFromEmail(email, 4);
  return username;
};

module.exports = {
  usernameGenerator,
};
