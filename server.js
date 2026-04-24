const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/feedback", (req, res) => {
    const data = JSON.parse(fs.readFileSync("feedback.json", "utf8"));

    data.push(req.body);

    fs.writeFileSync("feedback.json", JSON.stringify(data, null, 2));

    res.send({ message: "Saved successfully" });
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
