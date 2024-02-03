const express = require("express");
const cors = require("cors");
const app = express();

const tasksRoute = require("./routes/tasksRoute");

app.use(express.json());
app.use(cors());

app.use("/tasks", tasksRoute);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
