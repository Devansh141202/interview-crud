const express = require("express");
const { connectionDB } = require("./DB/database");
const app = express();
const PORT = 3001;
const photoRoutes = require("./Routes/createRoutes")
app.use(express.json());
connectionDB();
app.use("/api/v1", photoRoutes)
app.listen(PORT, ()=>{
    console.log(`server is listening on ${PORT}`);
})