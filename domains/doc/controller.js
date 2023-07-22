export const list = (req, res) => {
  res.send({ title: "doc", posts: "list" });
};

export const getById = (req, res) => {
  res.send({ title: "doc", dataId: req.params.id });
};
