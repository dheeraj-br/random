export const list = (req, res) => {
  res.send({ title: "wildcard", data: "list" });
};

export const getById = (req, res) => {
  res.send({ title: "wildcard", dataId: req.params.id });
};

export const subdomain = (req, res) => {
  res.send({ title: "wildcard", subdomain: req.vhost[0] });
};
