// @desc     Get all Todos
// @route    GET /api/v1/todos
// @access   Public
exports.getTodos = (req, res, next) => {
  res.status(200).json({ hey: "its working" });
};

// @desc     Get single Todo
// @route    GET /api/v1/todos/:id
// @access   Public
exports.getTodo = (req, res, next) => {
  res.status(200).json({ hey: "its working" });
};

// @desc     Create new Todo
// @route    POST /api/v1/todos
// @access   Public
exports.createTodo = (req, res, next) => {
  res.status(200).json({ hey: "its working" });
};

// @desc     Update Todo
// @route    PUT /api/v1/todos/:id
// @access   Private
exports.updateTodo = (req, res, next) => {
  res.status(200).json({ hey: "its working" });
};

// @desc     Delete Todo
// @route    /api/v1/todos/:id
// @access   Private
exports.deleteTodo = (req, res, next) => {
  res.status(200).json({ hey: "its working" });
};
