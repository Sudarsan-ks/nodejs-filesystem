const fs = require("node:fs");
const express = require("express");
const path = require("path");

const app = express();
const PORT = 5000;
const HOST = "localhost";

const PATH = "./TASK/";

if (!fs.existsSync(PATH)) {
  fs.mkdirSync(PATH);
}

app.post("/create", (req, res) => {
  const TIMESTAMP = Date.now();
  const DATE = new Date(TIMESTAMP);
  const DAY = DATE.getDate();
  const MONTH = DATE.getMonth() + 1;
  const YEAR = DATE.getFullYear();
  const HOURS = DATE.getHours();
  const MINUTUES = DATE.getMinutes();
  const SECONDS = DATE.getSeconds();

  const FILENAME = `${DAY}-${MONTH}-${YEAR}-${HOURS}-${MINUTUES}-${SECONDS}`;
  const CONTENT = `${DATE}`;

  const COMPLETEPATH = `${PATH}${FILENAME}.txt`;

  fs.writeFile(COMPLETEPATH, CONTENT, (err) => {
    if (err) {
      console.error("Error writing file:", err);
      res.status(500).send("Error writing file");
      return;
    }
    res.send(`File created: ${FILENAME}`);
  });
});

app.get("/read", (req, res) => {
  fs.readdir(PATH, (err, data) => {
    if (err) {
      console.error("Error in reading file", err);
      res.status(500).send("Error while reading the directory");
      return;
    }
    const file = data.filter((d) => path.extname(d)=== ".txt");
    res.json({file});
  });
});


app.listen(PORT, () => {
  console.log(`Server is started on this ${PORT}`);
});
