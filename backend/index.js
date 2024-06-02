const express = require('express');
const cors = require('cors');
const path = require('path');
const userRoute = require('./Routes/User_Access');
const gamesRoute = require('./Routes/Games');
const userProfileRoute = require('./Routes/UserProfile');
const commentsRoute = require('./Routes/Comments');

const app = express();
app.use(cors());
app.use(express.json());

// Serve static files from the Poze_users directory
app.use('/poze_users', express.static(path.join(__dirname, 'Poze_users')));
app.use('/poze_jocuri', express.static(path.join(__dirname, 'Poze_jocuri')));

app.use(userRoute);
app.use(gamesRoute);
app.use(commentsRoute);
app.use(userProfileRoute);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;