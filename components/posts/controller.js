export const list = (req, res) => {
  res.send({ title: 'Posts', posts: 'list' });
};

export const getById = (req, res) => {
  res.send({ title: 'Posts', posts: 'id' });
};
