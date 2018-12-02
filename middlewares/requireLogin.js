module.exports = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send({ error: 'Você deve realizar o login!' });
  }

  next();
};
