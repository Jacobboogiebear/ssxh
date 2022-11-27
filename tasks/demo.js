const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, '../demo/')));
app.get("/ssxh.js", (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/ssxh.js'));
})

app.listen(8080, () => {
    console.log("Server is listening on port 8080");
});