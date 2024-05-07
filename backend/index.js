const express = require("express");
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());


const userRoute=require("./Routes/User");


app.use(userRoute);

app.listen(5000, () => {
    console.log(`Server running on http://localhost:${5000}`);
});

module.exports=app;