const prisma = require('../db/prisma.js');

const create = async (req, res) => {
  const { email, username, password } = req.body;

  try {
    const user = await prisma.user.create({
      data: {
        email,
        username, 
        password, 
      },
    });
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error creating user' });
  }
};

module.exports = { create };
