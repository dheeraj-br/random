export const list = (req, res) => {
    res.send({ title: 'Posts', posts: 'list of posts' });
};

export const getById = (req, res) => {
    res.send({ title: 'Posts', postId: req.params.id });
};
