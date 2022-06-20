const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const { getCompliment } = require('./controller')
app.get("/api/compliment", getCompliment);

const {  getFortune  } = require('./controller')
app.get("/api/fortune", getFortune);

const {  getDateIdea  } = require('./controller')
app.get("/api/dateIdea", getDateIdea)

const {  getSnackIdea  } = require('./controller')
app.get("/api/snackIdea", getSnackIdea)

const {  getReligiousIdea  } = require('./controller')
app.get("/api/religiousIdea", getReligiousIdea)

app.listen(4000, () => console.log("Server running on 4000"));
