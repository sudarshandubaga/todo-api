function index(req, res) {
  res.send({
    msg: "Running",
  });
}

module.exports = {
  index,
};
