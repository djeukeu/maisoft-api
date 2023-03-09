const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createUser = async (data, callback) => {
  try {
    const user = await prisma.user.create({
      data: {
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        hash: data.hash,
        phone: data.phone,
        firstname: data.firstname,
        firstname: data.firstname,
        firstname: data.firstname,
        firstname: data.firstname,
        firstname: data.firstname,
      },
    });
    callback(null, user);
  } catch (err) {
    callback(err, null);
  }
};


module.exports = {
  createUser,
};
