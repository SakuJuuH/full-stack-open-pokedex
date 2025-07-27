const express = require("express");
const app = express();

// get the port from env variable
const PORT = process.env.PORT || 3000;

app.use(express.static("dist"));

app.get("/health", (req, res) => {
	if (true) throw new Error("Health check failed");
	res.send("OK");
});

app.listen(PORT, () => {
	console.log(`server started on port ${PORT}`);
});
