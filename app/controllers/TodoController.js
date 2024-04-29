const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

BigInt.prototype.toJSON = function () {
  const int = Number.parseInt(this.toString());
  return int ?? this.toString();
};

async function create(req, res) {
  let body = req.body;

  try {
    await prisma.tasks.create({
      data: {
        name: body.name,
        description: body.description,
      },
    });

    res.send({
      msg: "Data added",
    });
  } catch (error) {
    res.status(500).send({
      error,
    });
  }
}

async function index(req, res) {
  try {
    let tasks = await prisma.tasks.findMany();
    console.log("tasks", tasks);
    res.send(tasks);
  } catch (error) {
    res.status(500).send({ error });
  }
}

function update(req, res) {
  res.send({
    msg: "Data updated",
    body: req.body,
  });
}

function destroy(req, res) {
  res.send({
    msg: "Data deleted.",
  });
}

function show(req, res) {
  res.send({});
}

module.exports = {
  index,
  create,
  update,
  destroy,
  show,
};
