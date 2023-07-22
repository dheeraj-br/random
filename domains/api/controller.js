export const list = (req, res) => {
  res.send({ title: "api", posts: "list" });
};

export const getById = (req, res) => {
  res.send({ title: "api", dataId: req.params.id });
};
