const express = require("express");

const app = express();

const api = express();

const cors = require("cors");

const { userRoutes, authRoutes } = require("./api/routes");

app.use(cors(
{
    origin: "*",
}));

app.use("/api", api);

api.use("/auth", authRoutes);

api.use("/users", userRoutes);

module.exports = app;