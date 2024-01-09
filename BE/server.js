const express = require("express");
const cors = require("cors")
const app = express();

require("dotenv").config(); //dotenv to read .env
let dbConnect = require("./dbConnect"); //dbConnect to retrieves DB

const corsOptions = {
  origin: "http://localhost:5173"
};

app.use(cors(corsOptions));

app.use("/lessonUpload", express.static("public/lesson")); // required for lesson mappings

// parse requests of content-type - application/json
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to my SQLDB application." });
});

app.use("/lesson", express.static("public/lesson")); // required for image mappings

// let gradeRoutes = require('./routes/gradeRoute')
// app.use('/api/grade', gradeRoutes)

let studentRoutes = require('./routes/studentRoutes')
app.use('/api/student', studentRoutes) //PATH BEFORE THE END POINT 
// express.js method (req & res) + router object for calling my function

let teacherRoutes = require('./routes/teacherRoutes')
app.use('/api/teacher', teacherRoutes) //PATH BEFORE THE END POINT
// express.js method (req & res) + router object for calling my function

let lessonRoutes = require('./routes/lessonRoutes')
app.use('/api/lesson', lessonRoutes) //PATH BEFORE THE END POINT
// express.js method (req & res) + router object for calling my function

let lessonStatusRoutes = require('./routes/lessonStatusRoutes')
app.use('/api/lessonStatus', lessonStatusRoutes) //PATH BEFORE THE END POINT
// express.js method (req & res) + router object for calling my function

let commentRoutes = require('./routes/commentRoutes')
app.use('/api/comment', commentRoutes) //PATH BEFORE THE END POINT 
// express.js method (req & res) + router object for calling my function

let guestUserRoutes = require('./routes/guestUserRoutes')
app.use('/api/guestUser', guestUserRoutes) //PATH BEFORE THE END POINT
// express.js method (req & res) + router object for calling my function






// set port, listen for requests
const PORT = process.env.PORT || 8080;

//method to start a server 
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});