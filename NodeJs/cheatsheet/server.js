require("./config/config");

const express = require("express");

const app = express();

const users = require("./routes/users");

//Antes de los endpoints los middlewares

app.use("/users", users);


app.listen(process.env.PORT, 
    () => console.log("Listening on port:", process.env.PORT)
);
