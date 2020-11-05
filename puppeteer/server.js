const express = require("express");
const app = express();
const port = 4000;

// to be able to use req.body middleware
app.use(express.json({ extended: false }));

app.use("/home", require("./routes/home"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
