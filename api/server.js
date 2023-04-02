// serverı buraya yazın ve index.js require yazın
const express = require("express");
const resouresRouter = require("./resource/router");
// const projectRouter = require("./project/router");
// const taskRouter = require("./task/router");

const server = express();

server.use(express.json());

server.use("/api/resources", resouresRouter);
// server.use("/api/projects", projectRouter);
// server.use("/api/tasks", taskRouter);

module.exports = server;
