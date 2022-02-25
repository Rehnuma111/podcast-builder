const express = require("express");
const app = express();
const userRouter = require("./routers/userRouter");
const podcastRouter = require("./routers/podcastRouter");
const utilRouter = require("./routers/util");
const cors = require("cors");

const port = 5000;

// to allow your frontend
app.use(cors({ origin: ["http://localhost:3000"] }));

// for reading data from client
app.use(express.json());

// to connect routers
app.use("/user", userRouter);
app.use("/podcastRouter",podcastRouter);
app.use("/util",utilRouter);

app.listen(port, () => {
  console.log("server started");
});