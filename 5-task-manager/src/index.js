const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT || 3000;

app.use((req, res, next) => {
  console.log(req.method, req.path);

  next();
});

app.use(express.json());

app.use(userRouter);

app.use(taskRouter);

app.listen(port);

// const jwt = require("jsonwebtoken");

// const myFunction = async () => {
//   const token = jwt.sign({ _id: "abc123" }, "afarefefsfae123", {
//     expiresIn: "7 dayss",
//   });
//   console.log(token);

//   const data = jwt.verify(token, "afarefefsfae123");
//   console.log(data);
// };

// myFunction();
