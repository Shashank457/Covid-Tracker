const express = require("express");
const pug = require("pug");
const path = require("path");
const app = express();
const dotenv = require("dotenv");
dotenv.config({ path: `./.env` });
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "frontend")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const userRoute = require("./routes/userRoute");
app.use("/", userRoute);
const port = process.env.PORT;
app.listen(port, () => {
  console.log("server is running at 8000 port");
});
