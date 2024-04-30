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

async function update(req, res) {
  try {
    await prisma.tasks.update({
      data: req.body,
      where: {
        id: req.params.id,
      },
    });

    res.send({
      msg: "Data updated",
      body: req.body,
      params: req.params,
    });
  } catch (error) {
    res.status(500).send({ error });
  }
}

async function destroy(req, res) {
  try {
    await prisma.tasks.delete({
      where: {
        id: req.params.id,
      },
    });
    res.send({
      msg: "Data deleted.",
    });
  } catch (error) {
    res.status(500).send({ error });
  }
}

async function show(req, res) {
  try {
    let response = await prisma.tasks.findFirst({
      where: {
        id: req.params.id,
      },
    });

    res.send(response);
  } catch (error) {
    res.status(500).send({ error });
  }
}

module.exports = {
  index,
  create,
  update,
  destroy,
  show,
};
