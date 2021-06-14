const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

//set up the server

const app = express();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Hi server started on port: ${PORT}`));

app.use(express.json());

//FwgTrAex1nIanNfU
//mongodb+srv://Ash:<password>@cluster0.i5zcj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

//connect to mongoDB

mongoose.connect(
  process.env.MDB_CONNECT,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) return console.error(err);
    console.log("connected to MongoDB");
  }
);

//set up routers

app.use("/auth", require("./routers/userRouter"));
