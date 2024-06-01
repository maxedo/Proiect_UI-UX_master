const express = require("express");
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());


const userRoute=require("./Routes/User_Access");
const gamesRoute=require("./Routes/Games");
const userProfileRoute=require("./Routes/UserProfile")
const commentsRoute=require("./Routes/Comments");



app.use(userRoute);
app.use(gamesRoute);
app.use(commentsRoute);
app.use(userProfileRoute);


app.listen(5000, () => {
    console.log(`Server running on http://localhost:${5000}`);
});

module.exports=app;