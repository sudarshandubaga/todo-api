const HomeController = require("../../app/controllers/HomeController");
const TodoController = require("../../app/controllers/TodoController");

function routes(app) {
  app.get("/", HomeController.index);

  app.post("/todos", TodoController.create);
  app.get("/todos", TodoController.index);
  app.get("/todos/:id", TodoController.show);
  app.put("/todos/:id", TodoController.update);
  app.delete("/todos/:id", TodoController.destroy);
}

module.exports = routes;
