const express = require("express");
const dotenv = require("dotenv");
const dbConnect = require("./src/config/db");
const cors = require("cors");
const routes=require("./src/routes")
const app = express();
const PORT = process.env.PORT;
//loading middlewares
app.use(express.json());
app.use(cors());

//excuting routes
app.use(routes)
//LOADING DOTENV FILE
dotenv.config({ path: "./src/config/config.env" });
dbConnect();
app.listen(PORT, () => {
  console.log(`application started http://localhost:${PORT}`);
});