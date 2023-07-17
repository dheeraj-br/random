export const list = (req, res) => {
  res.send({ title: 'Users', users: 'list' });
};

export const getById = (req, res) => {
  res.send({ title: 'Users', users: 'id' });
};
