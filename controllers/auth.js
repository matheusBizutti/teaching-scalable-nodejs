const prisma = require('../db/prisma.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const JWT_SECRET = process.env.JWT_SECRET;

const create = async (req, res) => {
  const { email, username, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email,
        username, 
        password: hashedPassword, 
      },
    });
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error creating user' });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) return res.status(401).json({ error: 'Invalid email or password' });
    
    const validPassword = await bcrypt.compare(password, user.password);

    // Simple password check (replace with hashed password check in real apps)
    if (!validPassword) return res.status(401).json({ error: 'Invalid email or password' });

    const jwtToken = jwt.sign({
      userId: user.id, email: user.email, username: user.username}, JWT_SECRET, {expiresIn: '1h'});

    res.json({ message: 'Authenticated successfully', jwtToken });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error authenticating user'});
  }
};

module.exports = { create, login };
