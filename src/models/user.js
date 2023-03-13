const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { hashGenerator } = require('../utils/hashGenerator');
const { usernameGenerator } = require('../utils/usernameGenerator');

const createUser = async (data, callback) => {
  const hash = await hashGenerator(data.password);
  const username = usernameGenerator(data.email);
  try {
    const user = await prisma.user.create({
      data: {
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        hash: hash,
        phone: data.phone,
        username: username,
        address: data.address,
        type: data.type,
      },
    });
    callback(null, user);
  } catch (err) {
    callback(err, null);
  }
};

const readUserByEmail = async (data, callback) => {
  try {
    const user = await prisma.user.findUnique({ where: { email: data.email } });
    callback(null, user);
  } catch (err) {
    callback(err, null);
  }
};

module.exports = {
  createUser,
  readUserByEmail,
};
